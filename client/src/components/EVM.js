import React, { useState } from 'react';
import { Container, Card, Row, Col, Tab, Nav, Badge, Alert } from 'react-bootstrap';
import { Database, Server, Cpu, HardDrive, Shield, Gauge, Code, ArrowRight } from 'lucide-react';


function Evm() {
  const [activeTab, setActiveTab] = useState('storage');
  const storageExamples = [
    {
      id: 1,
      title: 'Basic Storage Layout',
      description: 'Contract with various data types showing storage slot allocation',
      code: `contract X {
      uint256 public a = 1;  // Slot 0
      uint128 public b = 2;  // Slot 1 (partially filled)
      uint128 public c = 3;  // Slot 1 (same as 'b', packed)
      bool public d = true;  // Slot 2 (partially filled)
      address public e = msg.sender; // Slot 3
  
      struct Data {
          uint256 x;
          uint256 y;
      }
      Data public data = Data(10, 20); // Slot 4 & 5
  
      mapping(address => uint256) public balances; // keccak256(slot)
      string public text = "Hello"; // Reference in slot 6
  }`,
      slots: [
        { id: 0, content: 'uint256 a (32 bytes)', color: 'primary' },
        { id: 1, content: 'uint128 b + uint128 c (16 + 16 bytes)', color: 'success' },
        { id: 2, content: 'bool d (1 byte)', color: 'warning' },
        { id: 3, content: 'address e (20 bytes)', color: 'info' },
        { id: 4, content: 'Data.x (32 bytes)', color: 'danger' },
        { id: 5, content: 'Data.y (32 bytes)', color: 'danger' },
        { id: 6, content: 'text reference', color: 'secondary' }
      ]
    },
    {
      id: 2,
      title: 'Struct Packing',
      description: 'Efficient struct layout with packed variables',
      code: `contract X {
      struct User {
          uint128 id;   // 16 bytes
          bool active;  // 1 byte
          uint8 level;  // 1 byte
          uint256 score; // 32 bytes (New slot)
      }
  }`,
      slots: [
        { id: 0, content: 'id (16 bytes) + active (1 byte) + level (1 byte)', color: 'success' },
        { id: 1, content: 'score (32 bytes)', color: 'primary' }
      ]
    },
    {
      id: 3,
      title: 'Mapping Storage',
      description: 'How mappings are stored using keccak256',
      code: `contract X {
      mapping(address => uint256) public balances;  // Slot 0
      
      function setBalance(address user, uint256 amount) public {
          balances[user] = amount;
      }
  }`,
      slots: [
        { id: 0, content: 'mapping slot identifier', color: 'info' },
        { id: 'n', content: 'keccak256(key + slot) => value', color: 'warning' }
      ]
    }
  ];
  
  const gasOptimizations = [
    {
      title: 'Variable Packing',
      description: 'Optimize storage by packing variables efficiently',
      unsafe: `uint128 a; // Slot 0
  uint256 b; // Slot 1
  uint128 c; // Slot 2`,
      safe: `uint128 a; // Slot 0
  uint128 c; // Slot 0 (packed)
  uint256 b; // Slot 1`
    }
  ];
  
  const rules = [
    {
      icon: <Database size={24} />,
      text: 'Every storage slot can store up to 32 bytes of data'
    },
    {
      icon: <HardDrive size={24} />,
      text: 'If a variable is ≤ 32 bytes, it fits into a single slot'
    },
    {
      icon: <Server size={24} />,
      text: 'If a variable is > 32 bytes, it gets its own slot and additional storage'
    }
  ];
  
  return (
    <Container className="py-5">
      <div className="d-flex align-items-center gap-3 mb-4">
        <Cpu size={32} className="text-primary" />
        <h1 className="mb-0">Ethereum Virtual Machine (EVM)</h1>
      </div>

      <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Nav variant="tabs" className="mb-4">
          <Nav.Item>
            <Nav.Link eventKey="storage" className="d-flex align-items-center gap-2">
              <Database size={18} />
              Storage Layout
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="gas" className="d-flex align-items-center gap-2">
              <Gauge size={18} />
              Gas Optimization
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="rules" className="d-flex align-items-center gap-2">
              <Shield size={18} />
              Storage Rules
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="storage">
            {storageExamples.map((example) => (
              <Card key={example.id} className="mb-4">
                <Card.Header>
                  <h3 className="h5 mb-0">{example.title}</h3>
                </Card.Header>
                <Card.Body>
                  <p className="text-muted">{example.description}</p>
                  
                  <Row className="mb-4">
                    <Col md={6}>
                      <h4 className="h6 mb-3 d-flex align-items-center gap-2">
                        <Code size={18} />
                        Contract Code
                      </h4>
                      <pre className="bg-light p-3 rounded">
                        <code>{example.code}</code>
                      </pre>
                    </Col>
                    <Col md={6}>
                      <h4 className="h6 mb-3 d-flex align-items-center gap-2">
                        <Database size={18} />
                        Storage Slots
                      </h4>
                      {example.slots.map((slot) => (
                        <Alert key={slot.id} variant={slot.color} className="d-flex align-items-center mb-2">
                          <strong className="me-2">Slot {slot.id}:</strong> {slot.content}
                        </Alert>
                      ))}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Tab.Pane>

          <Tab.Pane eventKey="gas">
            {gasOptimizations.map((opt, index) => (
              <Card key={index} className="mb-4">
                <Card.Header>
                  <h3 className="h5 mb-0">{opt.title}</h3>
                </Card.Header>
                <Card.Body>
                  <p className="text-muted">{opt.description}</p>
                  
                  <Row>
                    <Col md={5}>
                      <Badge bg="danger" className="mb-2">Unsafe</Badge>
                      <pre className="bg-light p-3 rounded">
                        <code>{opt.unsafe}</code>
                      </pre>
                    </Col>
                    <Col md={2} className="d-flex align-items-center justify-content-center">
                      <ArrowRight size={24} />
                    </Col>
                    <Col md={5}>
                      <Badge bg="success" className="mb-2">Safe</Badge>
                      <pre className="bg-light p-3 rounded">
                        <code>{opt.safe}</code>
                      </pre>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Tab.Pane>

          <Tab.Pane eventKey="rules">
            <Card>
              <Card.Body>
                <Row>
                  {rules.map((rule, index) => (
                    <Col md={4} key={index}>
                      <div className="d-flex align-items-center gap-3 mb-4">
                        <div className="bg-primary bg-opacity-10 p-3 rounded">
                          {rule.icon}
                        </div>
                        <p className="mb-0">{rule.text}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}

export default Evm;