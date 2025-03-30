import React from 'react';
import { Accordion, Card, ListGroup, Badge } from 'react-bootstrap';
import { 
  AlertCircle, 
  ShieldAlert, 
  ShieldCheck, 
  Zap, 
  Infinity as InfiniteIcon,
  RotateCcw,

  Lock
} from 'lucide-react';

const DOS = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-danger">
        <ShieldAlert className="me-2" size={28} />
        Denial of Service (DoS) Vulnerabilities in Solidity
      </h2>

      {/* Transaction Revert DoS */}
      <Accordion defaultActiveKey="0" className="mb-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <AlertCircle className="me-2 text-warning" size={20} />
            Transaction Revert DoS
          </Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Body>
                <Card.Title>Vulnerability</Card.Title>
                <Card.Text>
                  An attacker can make a contract's receive/fallback function always revert, causing transactions to fail and funds to be locked.
                </Card.Text>

                <Card.Title>Proof of Concept</Card.Title>
                <pre className="bg-dark text-light p-3 rounded">
                  <code>
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract X {
  function sendETH(address receiver) external payable {
    require(msg.value > 0, "amount must >0");
    (bool sent,) = receiver.call{value: msg.value}("");
    require(sent, "Transaction Failed@@");
  }  
}

contract Y {
  uint public balance;
  
  receive() external payable { 
    balance += msg.value;
    revert(" "); // Always reverts
  }
}`}
                  </code>
                </pre>

                <Card.Title>Mitigation</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Check recipient addresses before making external calls
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Use gas limits for external calls: <code>receiver.call{`{value: x, gas: limit}`}("")</code>
                  </ListGroup.Item>
                </ListGroup>

                <Card.Title className="mt-3">Real-world Impact</Card.Title>
                <Card.Text>
                  In 2020, the "Governor Alpha" contract in Compound had a similar issue where proposals could be made to revert on execution, effectively DoSing the governance system.
                </Card.Text>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Gas Limit DoS with Loops */}
      <Accordion className="mb-4">
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {/* <Gas className="me-2 text-warning" size={20} /> */}
            Gas Limit DoS with Loops
          </Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Body>
                <Card.Title>Vulnerability</Card.Title>
                <Card.Text>
                  Attackers can use bounded or unbounded loops to consume all gas, causing transactions to fail when block gas limit is exceeded.
                </Card.Text>

                <Card.Title>Proof of Concept</Card.Title>
                <pre className="bg-dark text-light p-3 rounded">
                  <code>
{`contract Y {
  receive() external payable {
    uint i = 0;
    while(i < 10000000) { // Infinite loop
      i += 1;
    }
  }
}`}
                  </code>
                </pre>

                <Card.Title>Mitigation</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Avoid unbounded loops in smart contracts
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Use pagination for large data sets
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Set reasonable upper bounds for iterations
                  </ListGroup.Item>
                </ListGroup>

                <Card.Title className="mt-3">Real-world Impact</Card.Title>
                <Card.Text>
                  Many early Ethereum contracts suffered from gas limit issues when processing arrays of unknown size, making them unusable as the network grew.
                </Card.Text>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Liquidity Removal DoS */}
      <Accordion className="mb-4">
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <InfiniteIcon className="me-2 text-warning" size={20} />
            Liquidity Removal DoS
          </Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Body>
                <Card.Title>Vulnerability</Card.Title>
                <Card.Text>
                  Attackers can rapidly drain liquidity pools by executing multiple swaps in sequence, making future swaps expensive or impossible.
                </Card.Text>

                <Card.Title>Proof of Concept</Card.Title>
                <pre className="bg-dark text-light p-3 rounded">
                  <code>
{`interface IDEX {
  function swap(address tokenA, address tokenB, uint256 amount) external;
}

contract LiquidityDrainAttack {
  IDEX public dex;
  address public tokenA;
  address public tokenB;

  constructor(address _dex, address _tokenA, address _tokenB) {
    dex = IDEX(_dex);
    tokenA = _tokenA;
    tokenB = _tokenB;
  }

  function attack() external {
    for (uint256 i = 0; i < 100; i++) {
      dex.swap(tokenA, tokenB, 1000); // Swap multiple times to drain liquidity
    }
  }
}`}
                  </code>
                </pre>

                <Card.Title>Mitigation</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Implement swap cooldowns or rate limiting
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Use minimum liquidity thresholds
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Add transaction size limits
                  </ListGroup.Item>
                </ListGroup>

                <Card.Title className="mt-3">Real-world Impact</Card.Title>
                <Card.Text>
                  Several DEXs have suffered from liquidity draining attacks, especially those with tokens that have transfer fees or burn mechanisms.
                </Card.Text>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Reentrancy DoS */}
      <Accordion className="mb-4">
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <RotateCcw className="me-2 text-warning" size={20} />
            Reentrancy DoS
          </Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Body>
                <Card.Title>Vulnerability</Card.Title>
                <Card.Text>
                  If a contract processes external calls before updating its state, attackers can repeatedly call a function to block execution.
                </Card.Text>

                <Card.Title>Proof of Concept</Card.Title>
                <pre className="bg-dark text-light p-3 rounded">
                  <code>
{`contract ReentrancyDoS {
  mapping(address => uint256) public balances;

  function deposit() external payable {
    balances[msg.sender] += msg.value;
  }

  function withdraw() external {
    require(balances[msg.sender] > 0, "No balance");
    (bool success, ) = msg.sender.call{value: balances[msg.sender]}("");
    require(success, "Transfer failed");
    balances[msg.sender] = 0; // State update happens after external call
  }
}`}
                  </code>
                </pre>

                <Card.Title>Mitigation</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Follow Checks-Effects-Interactions pattern
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Use OpenZeppelin's ReentrancyGuard
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Use call() with gas limits and check return values
                  </ListGroup.Item>
                </ListGroup>

                <Card.Title className="mt-3">Real-world Impact</Card.Title>
                <Card.Text>
                  The famous DAO hack in 2016 was a reentrancy attack that resulted in the loss of 3.6 million ETH and the Ethereum hard fork.
                </Card.Text>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Unbounded Operations DoS */}
      <Accordion className="mb-4">
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <Lock className="me-2 text-warning" size={20} />
            Unbounded Operations DoS
          </Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Body>
                <Card.Title>Vulnerability</Card.Title>
                <Card.Text>
                  Dynamic or unlimited iterations may cause transactions to fail when processing large data sets.
                </Card.Text>

                <Card.Title>Proof of Concept</Card.Title>
                <pre className="bg-dark text-light p-3 rounded">
                  <code>
{`contract X {
  uint[] public arr;
  
  function set(uint n) public {
    for(uint i = 0; i < n; i++) {
      arr.push(i);
    }
  }
  
  // n=10000 causes out of gas error
}`}
                  </code>
                </pre>

                <Card.Title>Mitigation</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Avoid operations that grow with user input
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Implement pagination for large data sets
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Set reasonable upper bounds for operations
                  </ListGroup.Item>
                </ListGroup>

                <Card.Title className="mt-3">Real-world Impact</Card.Title>
                <Card.Text>
                  Many governance contracts have failed when trying to process large numbers of token holders in a single transaction.
                </Card.Text>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default DOS;