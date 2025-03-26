import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Book, ShieldCheck, Terminal } from "lucide-react";

const Layout = () => {
  return (
    <Container className="py-5">
      <Row className="mb-4 text-center">
        <Col>
          <h1>Welcome !</h1>
          <p>Exploring Blockchain, CTFs, Audits, and Projects</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="p-3 shadow-sm">
            <Card.Body className="text-center">
          
              <h2>Hi , I am Uday Kiran</h2>
              <p>
                
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5 text-center">
        <Col md={4} className="mb-3">
          <Card className="p-3 shadow-sm">
            <Book size={40} className="mx-auto mb-2" />
            <h5>CTF Challenges</h5>
            <p>Solving real-world smart contract vulnerabilities.</p>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="p-3 shadow-sm">
            <ShieldCheck size={40} className="mx-auto mb-2" />
            <h5>Smart Contract Audits</h5>
            <p>Ensuring secure and robust blockchain applications.</p>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="p-3 shadow-sm">
            <Terminal size={40} className="mx-auto mb-2" />
            <h5>Find A Bug</h5>
            <p>Secure the Protocols</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
