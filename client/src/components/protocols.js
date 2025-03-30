import React, { lazy } from "react";
import Accordion from "react-bootstrap/Accordion";
import { CheckCircle, FileText, Send } from "lucide-react";

const DefiFlow = lazy(() => import("./DefiOverView"));


const Protocols = () => {
  return (
    <div className="container mt-4">
      {/* <h2 className="text-center mb-3">Blockchain Security Protocols</h2> */}
 <h2 className="text-center mb-3">Codebase On The Protocols</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <CheckCircle className="me-2" /> ERC20 Protocol 
          </Accordion.Header>
          <Accordion.Body>
            <p className="text-muted">
              The ERC20 protocol is a  widely adopted standard for fungible tokens on the Ethereum blockchain.
              It defines a set of functions and events that allow for the creation, transfer, and approval of tokens.
              This protocol ensures interoperability between different tokens and smart contracts.
            </p>
            <p>
              <strong>Purpose of the ERC20 Protocol:</strong> The ERC20 token standard facilitates the seamless exchange 
              and interoperability of tokens within the Ethereum ecosystem. It enables users to send, receive, 
              and approve token transactions securely and efficiently.
            </p>
            <p>
              <strong>Functions in ERC20 Protocol:</strong>
              <ul>
                <li>
                  <code>totalSupply()</code>: Returns the total supply of tokens in circulation.
                </li>
                <li>
                  <code>balanceOf(address account)</code>: Retrieves the token balance of a given address.
                </li>
                <li>
                  <code>transfer(address recipient, uint256 amount)</code>: Transfers a specified amount of tokens 
                  from the sender's balance to the recipient.
                </li>
                <li>
                  <code>approve(address spender, uint256 amount)</code>: Grants permission for another address 
                  to spend a specific amount of tokens on behalf of the sender.
                </li>
                <li>
                  <code>allowance(address owner, address spender)</code>: Returns the remaining amount of tokens 
                  that a spender is allowed to spend on behalf of the owner.
                </li>
                <li>
                  <code>decreaseAllowance( address spender,substract value)</code>:Decrease the allowance of a user
                </li>
                <li>
                  <code>increaseAllowance( address spender,adding value)</code>:Increase the allowance of a user .
                </li>
                <li>
                  <code>transferFrom(address sender, address recipient, uint256 amount)</code>: Transfers tokens from 
                  one address to another, based on prior approval.
                </li>
              </ul>
            </p>
            <pre>{`
  // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyERC20Token {
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    uint256 private _totalSupply;
    string public name;
    string public symbol;
    uint8 public decimals;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Mint(address indexed to, uint256 value);
    event Burn(address indexed from, uint256 value);
    
    constructor(string memory _name, string memory _symbol, uint256 initialSupply, uint8 _decimals) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        _totalSupply = initialSupply * (10 ** uint256(decimals)); 
        _balances[msg.sender] = _totalSupply; 
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function transfer(address recipient, uint256 amount) public returns (bool) {
        require(recipient != address(0), "ERC20: transfer to the zero address");
        require(_balances[msg.sender] >= amount, "ERC20: transfer amount exceeds balance");
        
        _balances[msg.sender] -= amount;
        _balances[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint256 amount) public returns (bool) {
        require(spender != address(0), "ERC20: approve to the zero address");
        
        _allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function allowance(address owner, address spender) public view returns (uint256) {
        return _allowances[owner][spender];
    }

    function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");
        require(_balances[sender] >= amount, "ERC20: transfer amount exceeds balance");
        require(_allowances[sender][msg.sender] >= amount, "ERC20: transfer amount exceeds allowance");
        
        _balances[sender] -= amount;
        _balances[recipient] += amount;
        _allowances[sender][msg.sender] -= amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) public returns (bool) {
        require(spender != address(0), "ERC20: increase allowance for the zero address");
        _allowances[msg.sender][spender] += addedValue;
        emit Approval(msg.sender, spender, _allowances[msg.sender][spender]);
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool) {
        require(spender != address(0), "ERC20: decrease allowance for the zero address");
        require(_allowances[msg.sender][spender] >= subtractedValue, "ERC20: decreased allowance below zero");
        _allowances[msg.sender][spender] -= subtractedValue;
        emit Approval(msg.sender, spender, _allowances[msg.sender][spender]);
        return true;
    }

    function mint(address account, uint256 amount) public {
        require(account != address(0), "ERC20: mint to the zero address");
        _totalSupply += amount;
        _balances[account] += amount;
        emit Mint(account, amount);
        emit Transfer(address(0), account, amount);
    }

    function burn(uint256 amount) public {
        require(_balances[msg.sender] >= amount, "ERC20: burn amount exceeds balance");
        _balances[msg.sender] -= amount;
        _totalSupply -= amount;
        emit Burn(msg.sender, amount);
        emit Transfer(msg.sender, address(0), amount);
    }
}


`}</pre>
          </Accordion.Body>
        </Accordion.Item>


///////////////////////////////////

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <FileText className="me-2" /> ERC721 Protocol
          </Accordion.Header>
          <Accordion.Body>
            <p><strong>Uses:</strong> ERC721 is a standard for representing non-fungible tokens (NFTs) on the Ethereum blockchain.</p>
            <p><strong>Scope:</strong> It provides a standardized interface for creating and managing unique tokens.</p>
            <p><strong>Purpose:</strong> Enables the creation of digital assets such as collectibles, real estate, and digital art.</p>
            
            <p><strong>MyERC721Token:</strong> Implements the ERC721 standard to create unique, non-fungible tokens.</p>
            <ul>
              <li><strong>name, symbol:</strong> Stores the token's name and symbol.</li>
              <li><strong>_owners, _balances:</strong> Track ownership and balance of tokens.</li>
              <li><strong>_tokenApprovals, _operatorApprovals:</strong> Manage token approvals and operator permissions.</li>
            </ul>
            
            <p><strong>Functions Breakdown:</strong></p>
            <ul>
              <li><strong>balanceOf:</strong> Returns the number of tokens owned by an address.</li>
              <li><strong>ownerOf:</strong> Returns the owner of a specific token ID.</li>
              <li><strong>approve:</strong> Allows another address to transfer a token.</li>
              <li><strong>getApproved:</strong> Returns the approved address for a specific token.</li>
              <li><strong>setApprovalForAll:</strong> Grants or revokes operator approval for all tokens of an owner.</li>
              <li><strong>transferFrom:</strong> Transfers a token from one address to another.</li>
              <li><strong>safeTransferFrom:</strong> Ensures safe token transfers.</li>
              <li><strong>mint:</strong> Creates a new token.</li>
              <li><strong>burn:</strong> Destroys an existing token.</li>
            </ul>
            
            <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyERC721Token {
    string public name;
    string public symbol;
    mapping(uint256 => address) private _owners;
    mapping(address => uint256) private _balances;
    mapping(uint256 => address) private _tokenApprovals;
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }

    function balanceOf(address owner) public view returns (uint256) {
        require(owner != address(0), "Invalid address");
        return _balances[owner];
    }

    function ownerOf(uint256 tokenId) public view returns (address) {
        address owner = _owners[tokenId];
        require(owner != address(0), "Token does not exist");
        return owner;
    }

    function approve(address to, uint256 tokenId) public {
        address owner = ownerOf(tokenId);
        require(to != owner, "Cannot approve to current owner");
        require(msg.sender == owner || isApprovedForAll(owner, msg.sender), "Not authorized");
        _tokenApprovals[tokenId] = to;
        emit Approval(owner, to, tokenId);
    }

    function getApproved(uint256 tokenId) public view returns (address) {
        require(_owners[tokenId] != address(0), "Token does not exist");
        return _tokenApprovals[tokenId];
    }

    function setApprovalForAll(address operator, bool approved) public {
        require(operator != msg.sender, "Cannot approve yourself");
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    function isApprovedForAll(address owner, address operator) public view returns (bool) {
        return _operatorApprovals[owner][operator];
    }

    function transferFrom(address from, address to, uint256 tokenId) public {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Not authorized");
        require(to != address(0), "Cannot transfer to zero address");
        _balances[from] -= 1;
        _balances[to] += 1;
        _owners[tokenId] = to;
        emit Transfer(from, to, tokenId);
    }

    function mint(address to, uint256 tokenId) public {
        require(to != address(0), "Cannot mint to zero address");
        require(_owners[tokenId] == address(0), "Token already exists");
        _balances[to] += 1;
        _owners[tokenId] = to;
        emit Transfer(address(0), to, tokenId);
    }

    function burn(uint256 tokenId) public {
        address owner = ownerOf(tokenId);
        _balances[owner] -= 1;
        delete _owners[tokenId];
        emit Transfer(owner, address(0), tokenId);
    }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

/////////////////////////////////////

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

<Accordion.Item eventKey="4">
    <Accordion.Header>
      <FileText className="me-2" /> Uniswap V1 (2018)
    </Accordion.Header>
    <Accordion.Body>
      <p><strong>Overview:</strong> In Uniswap V1, every ERC-20 token was paired directly with ETH.</p>
      <p><strong>Swap Process:</strong></p>
      <ul>
        <li>Swap Token A → ETH.</li>
        <li>Swap ETH → Token B.</li>
      </ul>
      <p><strong>Limitations:</strong></p>
      <ul>
        <li>Extra gas fees due to ETH intermediary.</li>
        <li>No direct token-to-token swaps.</li>
      </ul>
      
      <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IUniswapV1 {
    function ethToTokenSwapInput(uint256 minTokens, uint256 deadline) external payable;
    function tokenToEthSwapInput(uint256 tokensSold, uint256 minEth, uint256 deadline) external;
}

contract UniswapV1Swap {
    address private constant UNISWAP_V1_EXCHANGE =
        0x09cabEC1eAd1c0Ba254B09efb3EE13841712bE14;
    address private constant TOKEN =
        0xdAC17F958D2ee523a2206206994597C13D831ec7;

    IUniswapV1 public uniswapV1;

    constructor() {
        uniswapV1 = IUniswapV1(UNISWAP_V1_EXCHANGE);
    }

    function swapTokenForETH(uint256 amountIn, uint256 minEth) external {
        IERC20(TOKEN).transferFrom(msg.sender, address(this), amountIn);
        IERC20(TOKEN).approve(UNISWAP_V1_EXCHANGE, amountIn);
        uniswapV1.tokenToEthSwapInput(amountIn, minEth, block.timestamp + 300);
    }

    function swapETHForToken(uint256 minTokens) external payable {
        uniswapV1.ethToTokenSwapInput{value: msg.value}(minTokens, block.timestamp + 300);
    }
}`}</pre>
    </Accordion.Body>
  </Accordion.Item>








  <Accordion.Item eventKey="5">
    <Accordion.Header>
      <FileText className="me-2" /> Uniswap V2 (2020)
    </Accordion.Header>
    <Accordion.Body>
      <p><strong>Improvements:</strong></p>
      <ul>
        <li>Direct ERC-20 to ERC-20 swaps, eliminating ETH as an intermediary.</li>
        <li>Pair contracts hold reserves of two tokens.</li>
        <li>Introduced flash swaps for temporary asset borrowing.</li>
        <li>Enhanced price oracles to prevent manipulation.</li>
        <li>More efficient gas usage.</li>
      </ul>
      
      <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract UniswapV2Swap {
    address private constant UNISWAP_V2_ROUTER =
        0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;
    address private constant USDT =
        0xdAC17F958D2ee523a2206206994597C13D831ec7;
    address private constant WETH =
        0xC02aaa39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    IUniswapV2Router02 public uniswapRouter;

    constructor() {
        uniswapRouter = IUniswapV2Router02(UNISWAP_V2_ROUTER);
    }

    function swapUSDTForWETH(uint256 amountIn, uint256 amountOutMin) external {
        IERC20(USDT).transferFrom(msg.sender, address(this), amountIn);
        IERC20(USDT).approve(address(uniswapRouter), amountIn);
        address ;
        path[0] = USDT;
        path[1] = WETH;
        uniswapRouter.swapExactTokensForTokens(
            amountIn,
            amountOutMin,
            path,
            msg.sender,
            block.timestamp + 300
        );
    }
}`}</pre>
    </Accordion.Body>
  </Accordion.Item>


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

      <p><strong>Constant Product Formula:</strong> \( x \times y = k \)</p>
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
  /////


      </Accordion>
      <DefiFlow/>
    </div>
  );
};

export default Protocols;