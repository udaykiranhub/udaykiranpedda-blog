import React from 'react';
import { Accordion, Card, ListGroup, Badge } from 'react-bootstrap';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Code2,
  AlertTriangle,
  Lock,
  EyeOff,
  Key
} from 'lucide-react';

const PrivateStorageVulnerability = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-danger">
        <ShieldAlert className="me-2" size={28} />
        Private Storage Vulnerability in Solidity
      </h2>

      <Accordion defaultActiveKey="0" className="mb-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <EyeOff className="me-2 text-warning" size={20} />
            Private Data Exposure Vulnerability
          </Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Body>
                <Card.Title>Vulnerable Contract</Card.Title>
                <pre className="bg-dark text-light p-3 rounded">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract X {
    // Private doesn't mean hidden on blockchain
    string private password;

    function set(string memory pass) public {
        password = pass;
    }
}`}
                </pre>

                <Card.Title>Why This Is Dangerous</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <AlertTriangle className="me-2 text-warning" size={18} />
                    Private variables are still visible in contract storage
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AlertTriangle className="me-2 text-warning" size={18} />
                    Attackers can read storage slots directly
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AlertTriangle className="me-2 text-warning" size={18} />
                    Sensitive data like passwords can be exposed
                  </ListGroup.Item>
                </ListGroup>

                <Card.Title className="mt-3">Exploit Using Foundry</Card.Title>
                <div className="mb-3">
                  <Badge bg="dark" className="mb-2">
                    <Code2 className="me-1" size={14} />
                    Read storage slot
                  </Badge>
                  <pre className="bg-dark text-light p-2 rounded">
{`cast storage <contract_address> 0
0x756461796b6972616e706564646100000000000000000000000000000000001c`}
                  </pre>
                </div>

                <div className="mb-3">
                  <Badge bg="dark" className="mb-2">
                    <Code2 className="me-1" size={14} />
                    Convert to ASCII
                  </Badge>
                  <pre className="bg-dark text-light p-2 rounded">
{`cast --to-ascii 0x756461796b6972616e706564646100000000000000000000000000000000001c
udaykiranpedda`}
                  </pre>
                </div>

                <Card.Text className="text-danger">
                  <AlertTriangle className="me-2" size={18} />
                  Password exposed: "udaykiranpedda"
                </Card.Text>

                <Card.Title className="mt-3">Secure Implementation</Card.Title>
                <pre className="bg-dark text-light p-3 rounded">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract X {
    // Store hash instead of raw password
    bytes32 private passwordHash;

    function set(string memory pass) public {
        passwordHash = keccak256(abi.encodePacked(pass));
    }

    function verify(string memory input) public view returns (bool) {
        return passwordHash == keccak256(abi.encodePacked(input));
    }
}`}
                </pre>

                <Card.Title>Why This Is Secure</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Only stores hash of the password
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Attacker can see hash but can't reverse it
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Verification happens through hash comparison
                  </ListGroup.Item>
                </ListGroup>

                <Card.Title className="mt-3">Security Best Practices</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Lock className="me-2 text-success" size={18} />
                    Never store sensitive data unencrypted on-chain
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Lock className="me-2 text-success" size={18} />
                    Use hashing for any sensitive information
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Lock className="me-2 text-success" size={18} />
                    Consider keeping truly private data off-chain
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Lock className="me-2 text-success" size={18} />
                    Understand that all contract storage is publicly readable
                  </ListGroup.Item>
                </ListGroup>

                <Card.Text className="mt-3 text-info">
                  <Key className="me-2" size={18} />
                  <strong>Important Note:</strong> For truly secure data handling, consider keeping sensitive information off-chain and using blockchain only for verification purposes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default PrivateStorageVulnerability;