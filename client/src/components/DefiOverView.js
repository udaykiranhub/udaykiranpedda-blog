import React from "react";
import { 
  Card, 
  Container, 
  Row, 
  Col,
  ListGroup,
  Badge,
  Alert
} from "react-bootstrap";
import {
  Layers,
  Lock,
  RefreshCw,
  TrendingUp,
  DollarSign,
  HardDrive,
  PieChart,
  Users,
  Activity
} from "lucide-react";

const DefiFlow = () => {
  return (
    <Container className="mt-4" style={{ maxWidth: "800px" }}>
      <Card className="border-0">
        <Card.Body className="text-center">
          <Card.Title as="h1" className="mb-3">DeFi Protocols</Card.Title>
          <Card.Text className="text-muted lead">
            Major decentralized finance protocols in use today
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Lending Protocols */}
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center bg-light">
          <Lock className="me-2 text-primary" />
          <h4 className="mb-0">Lending Protocols</h4>
        </Card.Header>
        <Card.Body>
          <p>
            <strong>Scope:</strong> Lending protocols enable users to lend or borrow crypto assets without intermediaries. Lenders earn interest on deposited assets, while borrowers use collateral to secure loans.
          </p>
          <Row>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Aave</Card.Title>
                  <Card.Text>
                    <strong>Example:</strong> Alice deposits ETH into Aave and receives aETH, earning interest over time. If Bob wants a loan, he provides collateral and borrows USDC.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 mt-3 mt-md-0">
                <Card.Body>
                  <Card.Title>Compound</Card.Title>
                  <Card.Text>
                    <strong>Example:</strong> Bob supplies USDC and earns COMP tokens. The interest rate adjusts dynamically based on supply and demand.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* DEX Protocols */}
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center bg-light">
          <RefreshCw className="me-2 text-success" />
          <h4 className="mb-0">DEX Protocols</h4>
        </Card.Header>
        <Card.Body>
          <p>
            <strong>Scope:</strong> Decentralized exchanges (DEXs) allow users to swap tokens without a centralized authority. Liquidity providers earn fees from trades.
          </p>
          <Row>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Uniswap</Card.Title>
                  <Card.Text>
                    <strong>Example:</strong> Alice swaps ETH for USDC using Uniswap. Liquidity providers earn a 0.3% fee from trades.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 mt-3 mt-md-0">
                <Card.Body>
                  <Card.Title>Curve Finance</Card.Title>
                  <Card.Text>
                    <strong>Example:</strong> Bob swaps USDC for DAI with minimal slippage due to Curve’s optimized stablecoin pools.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Yield Aggregators */}
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center bg-light">
          <TrendingUp className="me-2 text-warning" />
          <h4 className="mb-0">Yield Aggregators</h4>
        </Card.Header>
        <Card.Body>
          <p>
            <strong>Scope:</strong> Yield aggregators optimize returns on deposited assets by automatically reallocating funds to the highest-yielding protocols.
          </p>
          <Row>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Yearn Finance</Card.Title>
                  <Card.Text>
                    <strong>Example:</strong> Alice deposits DAI into Yearn. The protocol automatically moves it across lending platforms for the best yield.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 mt-3 mt-md-0">
                <Card.Body>
                  <Card.Title>Convex Finance</Card.Title>
                  <Card.Text>
                    <strong>Example:</strong> Bob stakes Curve LP tokens in Convex to maximize CRV rewards with boosted yield.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Derivatives */}
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center bg-light">
          <Activity className="me-2 text-danger" />
          <h4 className="mb-0">Derivatives</h4>
        </Card.Header>
        <Card.Body>
          <p>
            <strong>Scope:</strong> Derivative protocols allow users to trade synthetic assets, futures, and leveraged positions without holding the underlying assets.
          </p>
          <Row>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>dYdX</Card.Title>
                  <Card.Text>
                    <strong>Example:</strong> Alice trades ETH with 10x leverage on dYdX without needing a centralized exchange.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 mt-3 mt-md-0">
                <Card.Body>
                  <Card.Title>Synthetix</Card.Title>
                  <Card.Text>
                    <strong>Example:</strong> Bob mints sBTC, a synthetic Bitcoin asset, by staking SNX tokens as collateral.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DefiFlow;
