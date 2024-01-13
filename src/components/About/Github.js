import React from "react";
import { Col, Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";
import {
  SiAmazonaws,
  SiGooglecloud,
  SiMicrosoftazure,
  SiDigitalocean,
  SiGodaddy
} from "react-icons/si";

function Cloudstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <h6 className="project-heading" style={{ paddingBottom: "20px" }}>
        Clouds <strong className="purple">I Worked</strong>
      </h6>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDigitalocean />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGodaddy />
      </Col>
    </Row>
    
  );
}



function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Clouds <strong className="purple">I Worked</strong>
      </h1>
      {/* <GitHubCalendar
        username=""
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      /> */}
    </Row>
  );
}

export default Cloudstack;
