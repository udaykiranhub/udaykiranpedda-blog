import React from 'react';
import { Accordion, Card, ListGroup, Table } from 'react-bootstrap';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Code2,
  AlertTriangle,
  Lock,
  User,
  ArrowRight
} from 'lucide-react';

const TxOriginVulnerability = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-danger">
        <ShieldAlert className="me-2" size={28} />
        tx.origin Authorization Vulnerability
      </h2>

      <Accordion defaultActiveKey="0" className="mb-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Code2 className="me-2 text-warning" size={20} />
            tx.origin vs msg.sender Attack
          </Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Body>
                <Card.Title>Vulnerable Contract</Card.Title>
                <pre className="bg-dark text-light p-3 rounded">
{`contract {
  address public owner;

  constructor() {
      owner = msg.sender;
  }

  function transfer(address payable _to, uint256 _amount) public {
      require(tx.origin == owner, "Not authorized");
      _to.transfer(_amount);
  }
}`}
                </pre>

                <Card.Title>Call Structure Analysis</Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Call Path</th>
                      <th>msg.sender</th>
                      <th>tx.origin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>User → Victim Contract</td>
                      <td>user</td>
                      <td>user</td>
                    </tr>
                    <tr>
                      <td>User → Attacker Contract → Victim Contract</td>
                      <td>Attacker Contract</td>
                      <td>user</td>
                    </tr>
                  </tbody>
                </Table>

                <Card.Title>Attack Mechanism</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <AlertTriangle className="me-2 text-warning" size={18} />
                    Victim deploys contract and becomes owner
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AlertTriangle className="me-2 text-warning" size={18} />
                    Attacker creates malicious contract with call to victim's transfer()
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AlertTriangle className="me-2 text-warning" size={18} />
                    Victim interacts with attacker's contract (phishing/trickery)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AlertTriangle className="me-2 text-warning" size={18} />
                    Call chain: Victim → Attacker Contract → Victim Contract
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AlertTriangle className="me-2 text-warning" size={18} />
                    tx.origin check passes (victim is original EOA)
                  </ListGroup.Item>
                </ListGroup>

                <Card.Title className="mt-3">Why This Is Dangerous</Card.Title>
                <Card.Text>
                  Allows attackers to trick users into unknowingly executing privileged actions. Users may not realize interacting with a malicious dApp can drain their contract.
                </Card.Text>

                <Card.Title className="mt-3">Mitigation</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    NEVER use tx.origin for authorization
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Always use msg.sender for access control
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Design with composability in mind
                  </ListGroup.Item>
                </ListGroup>

                <Card.Title className="mt-3">Secure Implementation</Card.Title>
                <pre className="bg-dark text-light p-3 rounded">
{`contract {
  address public owner;

  constructor() {
      owner = msg.sender;
  }

  function transfer(address payable _to, uint256 _amount) public {
      require(msg.sender == owner, "Not authorized");
      _to.transfer(_amount);
  }
}`}
                </pre>

                <Card.Title className="mt-3">Security Best Practices</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Lock className="me-2 text-success" size={18} />
                    Audit all authorization checks
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Lock className="me-2 text-success" size={18} />
                    Assume contracts will be called by other contracts
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Lock className="me-2 text-success" size={18} />
                    Validate trust boundaries in external calls
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default TxOriginVulnerability;