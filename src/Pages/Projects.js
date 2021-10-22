import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath=""
              title="Olx-clone"
              description="Olx-Clone is the potential classified advertisement website that categorizes objects in a user-friendly manner & displayed as an advertisement.., Classifieds can be posted that involve selling, buying, exchanging and will be adding a new feture that organizing to meet people nearby your location."
              link="https://github.com/sijeeshmiziha/olx"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath=""
              title="Netflix"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/sijeeshmiziha/netflix"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
