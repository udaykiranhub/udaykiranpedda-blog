import React from "react";
import { Accordion } from "react-bootstrap";
import { FileText } from "lucide-react";

const AMM = () => {
  return (
    <Accordion.Item eventKey="6">
      <Accordion.Header>
        <FileText className="me-2" /> Automated Market Maker (AMM)
      </Accordion.Header>
      <Accordion.Body>
        <p><strong>Gold & Diamond Token:</strong></p>
        <ul>
          <li>GoldToken (GOLD) - 100,000 initial supply</li>
          <li>DiamondToken (DIAMOND) - 50,000 initial supply</li>
        </ul>

        <p><strong>AMM Features:</strong></p>
        <ul>
          <li>Liquidity addition for GOLD and DIAMOND.</li>
          <li>Swapping GOLD for DIAMOND and vice versa using the constant product formula.</li>
          <li>0.3% transaction fee applied to swaps.</li>
        </ul>

        <p><strong>Constant Product Formula:</strong> x × y = k</p>
        <pre>
{`// Example Swap Calculation:
Gold = 1000
Diamond = 2000
k = Gold * Diamond = 2,000,000

1. Adding 100 Gold:
   GoldNew = 1000 + 100 = 1100

2. New Diamond Calculation:
   DiamondNew = k / GoldNew
              = 2,000,000 / 1100
              = 1818.1818

3. Diamonds to User:
   Diamond - DiamondNew
   = 2000 - 1818.1818
   = 181.8182

4. Updated Reserves:
   Diamonds = 1818.1818`}
        </pre>

        <p><strong>Swap Fee Calculation:</strong></p>
        <pre>
{`amountInFee = (amountIn * 997) / 1000
numerator = amountInFee * reserveOut
denominator = (reserveIn * 1000) + amountInFee
amountOut = numerator / denominator`}
        </pre>

        <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Gold Token (GOLD)
contract GoldToken is ERC20 {
    constructor() ERC20("GoldToken", "GOLD") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }
}

// Diamond Token (DIAMOND)
contract DiamondToken is ERC20 {
    constructor() ERC20("DiamondToken", "DIAMOND") {
        _mint(msg.sender, 50000 * 10 ** decimals());
    }
}

// Automated Market Maker (AMM) Contract
contract AMM {
    IERC20 public gold;
    IERC20 public diamond;
    uint256 public reserveGold;
    uint256 public reserveDiamond;
    
    constructor(address _gold, address _diamond) {
        gold = IERC20(_gold);
        diamond = IERC20(_diamond);
    }

    function addLiquidity(uint256 goldAmount, uint256 diamondAmount) external {
        gold.transferFrom(msg.sender, address(this), goldAmount);
        diamond.transferFrom(msg.sender, address(this), diamondAmount);
        reserveGold += goldAmount;
        reserveDiamond += diamondAmount;
    }

    function getAmountOut(uint256 amountIn, uint256 reserveIn, uint256 reserveOut) public pure returns (uint256) {
        require(amountIn > 0 && reserveIn > 0 && reserveOut > 0, "Invalid reserves");
        uint256 amountInWithFee = amountIn * 997;
        uint256 numerator = amountInWithFee * reserveOut;
        uint256 denominator = (reserveIn * 1000) + amountInWithFee;
        return numerator / denominator;
    }

    function swapGoldForDiamond(uint256 goldAmount) external {
        uint256 diamondAmount = getAmountOut(goldAmount, reserveGold, reserveDiamond);
        require(diamondAmount > 0, "Insufficient output amount");
        
        gold.transferFrom(msg.sender, address(this), goldAmount);
        diamond.transfer(msg.sender, diamondAmount);
        
        reserveGold += goldAmount;
        reserveDiamond -= diamondAmount;
    }

    function swapDiamondForGold(uint256 diamondAmount) external {
        uint256 goldAmount = getAmountOut(diamondAmount, reserveDiamond, reserveGold);
        require(goldAmount > 0, "Insufficient output amount");
        
        diamond.transferFrom(msg.sender, address(this), diamondAmount);
        gold.transfer(msg.sender, goldAmount);
        
        reserveDiamond += diamondAmount;
        reserveGold -= goldAmount;
    }
}`}</pre>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default AMM;