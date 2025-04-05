import { Accordion } from "react-bootstrap";
import { FileText } from "lucide-react";

const UniswapPool = () => {
  return (
    <Accordion.Item eventKey="7">
      <Accordion.Header>
        <FileText className="me-2" /> Uniswap Pool Analysis
      </Accordion.Header>
      <Accordion.Body>
        <p><strong>Uniswap Liquidity Pool Structure:</strong></p>
        <p>
          The Uniswap system is built on three key components: <strong>UniswapPair (Liquidity Pool)</strong>,
          <strong>UniswapFactory (Factory)</strong>, and <strong>UniswapRouter (Swap Facilitator)</strong>.
          Each plays a crucial role in the decentralized exchange mechanism.
        </p>

        <p><strong>1️⃣ UniswapPair (Liquidity Pool) → The Exchange Booth</strong></p>
        <ul>
          <li>This contract acts as the marketplace for token pairs.</li>
          <li>Users deposit two types of tokens (e.g., USD and EUR) to provide liquidity.</li>
          <li>The contract automatically determines the exchange rate based on supply and demand.</li>
          <li>Users can swap between the two tokens using the available liquidity.</li>
        </ul>

        <pre>{`// UniswapPair.sol
contract UniswapPair {
    address public token0;
    address public token1;
    mapping(address => uint256) public reserves;

    event LiquidityAdded(address indexed provider, uint256 amount0, uint256 amount1);
    event Swapped(address indexed trader, address tokenIn, uint256 amountIn, uint256 amountOut);

    constructor(address _token0, address _token1) {
        token0 = _token0;
        token1 = _token1;
    }

    function addLiquidity(uint256 amount0, uint256 amount1) external {
        IERC20(token0).transferFrom(msg.sender, address(this), amount0);
        IERC20(token1).transferFrom(msg.sender, address(this), amount1);
        reserves[token0] += amount0;
        reserves[token1] += amount1;
        emit LiquidityAdded(msg.sender, amount0, amount1);
    }

    function swap(address tokenIn, uint256 amountIn) external {
        require(tokenIn == token0 || tokenIn == token1, "Invalid token");
        address tokenOut = (tokenIn == token0) ? token1 : token0;
        uint256 amountOut = getAmountOut(amountIn, reserves[tokenIn], reserves[tokenOut]);
        require(amountOut > 0, "Insufficient liquidity");
        IERC20(tokenIn).transferFrom(msg.sender, address(this), amountIn);
        IERC20(tokenOut).transfer(msg.sender, amountOut);
        reserves[tokenIn] += amountIn;
        reserves[tokenOut] -= amountOut;
        emit Swapped(msg.sender, tokenIn, amountIn, amountOut);
    }
}`}</pre>

        <p><strong>2️⃣ UniswapFactory (Factory) → The Bank That Creates Exchange Counters</strong></p>
        <ul>
          <li>Responsible for deploying new liquidity pools.</li>
          <li>Creates new UniswapPair contracts for each trading pair (e.g., BTC/ETH).</li>
          <li>Ensures each token pair has a unique exchange contract.</li>
        </ul>

        <pre>{`// UniswapFactory.sol
contract UniswapFactory {
    mapping(address => mapping(address => address)) public getPair;
    address[] public allPairs;
    event PairCreated(address indexed tokenA, address indexed tokenB, address pair);

    function createPair(address tokenA, address tokenB) external returns (address pair) {
        require(tokenA != tokenB, "Identical tokens not allowed");
        require(getPair[tokenA][tokenB] == address(0), "Pair already exists");
        bytes32 salt = keccak256(abi.encodePacked(tokenA, tokenB));
        pair = address(new UniswapPair{salt: salt}(tokenA, tokenB));
        getPair[tokenA][tokenB] = pair;
        getPair[tokenB][tokenA] = pair;
        allPairs.push(pair);
        emit PairCreated(tokenA, tokenB, pair);
    }
}`}</pre>

        <p><strong>3️⃣ UniswapRouter (Swap Facilitator) → The Cashier That Helps You Exchange Money</strong></p>
        <ul>
          <li>Interacts with UniswapPair contracts to execute swaps.</li>
          <li>Users call the router to swap one token for another.</li>
          <li>Finds the correct liquidity pool and executes the trade.</li>
        </ul>

        <pre>{`// UniswapRouter.sol
contract UniswapRouter {
    IUniswapFactory public factory;
    constructor(address _factory) {
        factory = IUniswapFactory(_factory);
    }
    function swapExactTokens(address tokenA, address tokenB, uint256 amountIn) external {
        address pair = factory.getPair(tokenA, tokenB);
        require(pair != address(0), "Pair does not exist");
        IUniswapPair(pair).swap(tokenA, amountIn);
    }
}`}</pre>

        <p><strong>Conclusion:</strong></p>
        <p>
          This Uniswap model allows decentralized trading between any two tokens without the need for a traditional order book.
          Liquidity providers earn fees for supplying assets to pools, and traders benefit from automated swaps with fair pricing.
        </p>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default UniswapPool;