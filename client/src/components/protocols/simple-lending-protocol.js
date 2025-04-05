import React from "react";
import { Accordion } from "react-bootstrap";
import { FileText } from "lucide-react";

const SimpleLendingProtocol = () => {
  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>
        <FileText className="me-2" /> Simple Lending Protocol
      </Accordion.Header>
      <Accordion.Body>
        <p><strong>Uses:</strong> The Simple Lending Protocol allows users to deposit ETH as collateral, borrow tokens against it, and repay loans to free up collateral.</p>
        <p><strong>Scope:</strong> It provides a lending mechanism with liquidation rules to maintain a healthy collateral ratio.</p>
        <p><strong>Purpose:</strong> Enables decentralized lending and borrowing with ETH as collateral and a stable token as the borrowed asset.</p>

        <p><strong>SimpleLending:</strong> Implements a lending system with ETH collateral and ERC20 tokens.</p>
        <ul>
          <li><strong>stableToken:</strong> The ERC20 token used for borrowing.</li>
          <li><strong>COLLATERAL_RATIO, LIQUIDATION_RATIO:</strong> Defines borrowing and liquidation thresholds.</li>
          <li><strong>ETH_TO_TOKEN_RATE:</strong> Conversion rate from ETH to stable tokens.</li>
          <li><strong>loans mapping:</strong> Stores user loan details, including collateral and borrowed tokens.</li>
        </ul>

        <p><strong>Functions Breakdown:</strong></p>
        <ul>
          <li><strong>depositCollateral:</strong> Allows users to deposit ETH as collateral.</li>
          <li><strong>borrow:</strong> Enables users to borrow tokens based on their collateral.</li>
          <li><strong>repay:</strong> Allows users to repay borrowed tokens.</li>
          <li><strong>liquidate:</strong> Allows the admin to liquidate loans if collateral falls below the threshold.</li>
          <li><strong>withdrawCollateral:</strong> Enables users to withdraw collateral if there’s no outstanding loan.</li>
        </ul>

        <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20 {
    constructor() ERC20("stableToken", "STK") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}

contract SimpleLending is Ownable {
    IERC20 public stableToken;
    uint256 public constant COLLATERAL_RATIO = 150;
    uint256 public constant LIQUIDATION_RATIO = 120;
    uint256 public constant ETH_TO_TOKEN_RATE = 2000;

    struct Loan {
        uint256 collateralETH;
        uint256 borrowedTokens;
    }

    mapping(address => Loan) public loans;

    event Deposited(address indexed user, uint256 amount);
    event Borrowed(address indexed user, uint256 amount);
    event Repaid(address indexed user, uint256 amount);
    event Liquidated(address indexed user);

    constructor(IERC20 _stableToken) {
        stableToken = _stableToken;
    }

    function depositCollateral() external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        loans[msg.sender].collateralETH += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    function borrow(uint256 amount) external {
        Loan storage loan = loans[msg.sender];
        require(loan.collateralETH > 0, "No collateral deposited");
        uint256 maxBorrow = (loan.collateralETH * ETH_TO_TOKEN_RATE * 100) / COLLATERAL_RATIO;
        require(amount <= maxBorrow, "Borrow amount exceeds collateral limit");
        loan.borrowedTokens += amount;
        require(stableToken.transfer(msg.sender, amount), "Token transfer failed");
        emit Borrowed(msg.sender, amount);
    }

    function repay(uint256 amount) external {
        Loan storage loan = loans[msg.sender];
        require(loan.borrowedTokens >= amount, "Repay amount exceeds loan");
        require(stableToken.transferFrom(msg.sender, address(this), amount), "Repayment failed");
        loan.borrowedTokens -= amount;
        emit Repaid(msg.sender, amount);
    }

    function liquidate(address user) external onlyOwner {
        Loan storage loan = loans[user];
        uint256 requiredCollateral = (loan.borrowedTokens * COLLATERAL_RATIO) / 100;
        uint256 liquidationThreshold = (loan.borrowedTokens * LIQUIDATION_RATIO) / 100;
        require(loan.collateralETH * ETH_TO_TOKEN_RATE < liquidationThreshold, "Collateral sufficient");
        loan.collateralETH = 0;
        loan.borrowedTokens = 0;
        emit Liquidated(user);
    }

    function withdrawCollateral() external {
        Loan storage loan = loans[msg.sender];
        require(loan.borrowedTokens == 0, "Outstanding loan exists");
        uint256 amount = loan.collateralETH;
        loan.collateralETH = 0;
        payable(msg.sender).transfer(amount);
    }
}`}</pre>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default SimpleLendingProtocol;
