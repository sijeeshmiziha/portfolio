import React from 'react'
import { Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Components/Particles/Particle";
// import pdf from "../Assets/sijeesh-resume.pdf";

import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
    return (
        <Container fluid className="resume-section">
        <Particle />
        
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href="" target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
          </Container>
    </Container>
    )
}

export default Resume
