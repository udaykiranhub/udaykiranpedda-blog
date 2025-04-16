import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { Layers, Cpu, Zap, Globe, Lock, Rocket, HardDrive } from 'lucide-react';

const BlockchainLayers = () => {
  return (
    <div className="my-4">
      <h3 className="d-flex align-items-center gap-2 mb-4">
        <Layers size={24} className="text-primary" />
        Blockchain Architecture: Understanding L1, L2, and L3
      </h3>

      <Row className="g-4">
        {/* Layer 1 Card */}
        <Col md={4}>
          <Card className="h-100 border-primary">
            <Card.Header className="bg-primary text-white d-flex align-items-center">
              <HardDrive size={20} className="me-2" />
              <strong>Layer 1 (L1)</strong>
            </Card.Header>
            <Card.Body>
              <Card.Title>Base Blockchain</Card.Title>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <Badge bg="primary" className="d-flex align-items-center">
                  <Lock size={14} className="me-1" /> Security
                </Badge>
                <Badge bg="primary" className="d-flex align-items-center">
                  <Cpu size={14} className="me-1" /> Consensus
                </Badge>
              </div>
              <Card.Text>
                The foundational blockchain where transactions are directly recorded and validated.
              </Card.Text>
              <div className="alert alert-primary py-2">
                <strong>Limitations:</strong> Can become slow and expensive during peak usage.
              </div>
              <div className="mt-3">
                <h6>Examples:</h6>
                <div className="d-flex flex-wrap gap-2">
                  <Badge bg="light" text="dark">Ethereum</Badge>
                  <Badge bg="light" text="dark">Bitcoin</Badge>
                  <Badge bg="light" text="dark">Solana</Badge>
                  <Badge bg="light" text="dark">Avalanche</Badge>
                  <Badge bg="light" text="dark">Cardano</Badge>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Layer 2 Card */}
        <Col md={4}>
          <Card className="h-100 border-success">
            <Card.Header className="bg-success text-white d-flex align-items-center">
              <Zap size={20} className="me-2" />
              <strong>Layer 2 (L2)</strong>
            </Card.Header>
            <Card.Body>
              <Card.Title>Scaling Solutions</Card.Title>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <Badge bg="success" className="d-flex align-items-center">
                  <Rocket size={14} className="me-1" /> Speed
                </Badge>
                <Badge bg="success" className="d-flex align-items-center">
                  <Zap size={14} className="me-1" /> Efficiency
                </Badge>
              </div>
              <Card.Text>
                Built on top of L1 to process transactions off-chain while settling finality on the base layer.
              </Card.Text>
              <div className="alert alert-success py-2">
                <strong>Benefits:</strong> Faster transactions, lower fees, while maintaining L1 security.
              </div>
              <div className="mt-3">
                <h6>Examples:</h6>
                <div className="d-flex flex-wrap gap-2">
                  <Badge bg="light" text="dark">Polygon</Badge>
                  <Badge bg="light" text="dark">Arbitrum</Badge>
                  <Badge bg="light" text="dark">Optimism</Badge>
                  <Badge bg="light" text="dark">Lightning Network</Badge>
                  <Badge bg="light" text="dark">StarkNet</Badge>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Layer 3 Card */}
        <Col md={4}>
          <Card className="h-100 border-info">
            <Card.Header className="bg-info text-white d-flex align-items-center">
              <Globe size={20} className="me-2" />
              <strong>Layer 3 (L3)</strong>
            </Card.Header>
            <Card.Body>
              <Card.Title>Application Layer</Card.Title>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <Badge bg="info" className="d-flex align-items-center">
                  <Globe size={14} className="me-1" /> Interoperability
                </Badge>
                <Badge bg="info" className="d-flex align-items-center">
                  <Layers size={14} className="me-1" /> UX Focus
                </Badge>
              </div>
              <Card.Text>
                Specialized applications and protocols enabling cross-chain functionality and improved user experiences.
              </Card.Text>
              <div className="alert alert-info py-2">
                <strong>Focus:</strong> dApp functionality, chain communication, and specialized use cases.
              </div>
              <div className="mt-3">
                <h6>Examples:</h6>
                <div className="d-flex flex-wrap gap-2">
                  <Badge bg="light" text="dark">Uniswap</Badge>
                  <Badge bg="light" text="dark">Aave</Badge>
                  <Badge bg="light" text="dark">Axie Infinity</Badge>
                  <Badge bg="light" text="dark">Cosmos IBC</Badge>
                  <Badge bg="light" text="dark">Polkadot</Badge>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="mt-4 p-3 bg-light rounded">
        <h5 className="d-flex align-items-center gap-2">
          <Layers size={20} className="text-muted" />
          Key Takeaways
        </h5>
        <ul className="mb-0">
          <li><strong>L1 provides security</strong> - The base layer ensures decentralization and consensus</li>
          <li><strong>L2 enables scalability</strong> - Handles transaction throughput while inheriting L1 security</li>
          <li><strong>L3 drives adoption</strong> - Creates user-friendly applications and cross-chain ecosystems</li>
        </ul>
      </div>
    </div>
  );
};

export default BlockchainLayers;