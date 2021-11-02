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
              imgPath="https://user-images.githubusercontent.com/91063960/139678548-e58c550e-51c5-4695-a0c3-d6563737548a.png"
              title="Flipkart-clone"
              description="Flipkart is one of the best and trending eCommerce sites with a presence throughout India. The online shopping website is for Buying and Selling products online within the network.Sijeesh Miziha's Flipkart clone is a ready-made remarkable multi-vendor eCommerce site Entrepreneurs can start their own business like Flipkart, it has RazorPay Integration and get money from anywhere, in mobile, web, and iOS platforms, Completely responsive design using Material UI."              link="https://github.com/sijeeshmiziha/flipkart"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/91063960/139376405-043d6cfd-93b3-4486-a07a-2ff3382846d8.png"
              title="Olx-clone"
              description="Olx-Clone is the potential classified advertisement website that categorizes objects in a user-friendly manner & displayed as an advertisement.., Classifieds can be posted that involve selling, buying, exchanging and will be adding a new feture that organizing to meet people nearby your location."
              link="https://github.com/sijeeshmiziha/olx"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/91063960/139381648-76a0d2e5-9375-4f5a-8399-030888d8065e.png"
              title="Netflix-clone"
              description="In this small project you can play trailers of the Movies..,but I will be provide regualar updates with more features and functionalities because the entertainment industry is one of the largest online service businesses. The number of people seeking online entertainment is increasing rapidly. Increased leisure time and easier access to entertainment is driving the market forward."              link="https://github.com/sijeeshmiziha/netflix"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
