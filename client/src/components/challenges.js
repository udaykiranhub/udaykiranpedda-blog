import React, { lazy, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";



const ReverseEngineering = lazy(() => import("./CTF/Reverse-enginnering"));
const DamnSideEntrance=lazy(()=>import("./CTF/Damn-sideentrance"));
const DamnUnstoppable=lazy(()=>import("./CTF/Damn-unstopable"))
const DamnNaiveReceiver=lazy(()=>import("./CTF/Damn-NaiveReceiver"));

const DamnTruster=lazy(()=>import("./CTF/Damn-Truster"));
function Challenges() {
  return (
    <Container className=" flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" ,paddingTop:"5%"}}>
      <Row>
        <Col className="text-center">

          <h2 className="text-dark mb-5">
            Welcome to the CTF Playground
          </h2>
        </Col>
      </Row>

      <Suspense fallback={<div>loading.....</div>}>
        <ReverseEngineering />
        <DamnSideEntrance/>
        <DamnNaiveReceiver/>
        <DamnTruster/>

 <DamnUnstoppable/>
      </Suspense>
    </Container>
  );
}

export default Challenges;
