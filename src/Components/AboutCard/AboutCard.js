import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My Self <span className="purple">Sijeesh Miziha </span>
            I am a Fresh Graduate Engineer from <span className="purple"> Kerala, India.</span>
            <br />
            
            <br />I have completed Bachelor's degree in Computer Science from Government Victoria Collage Palakkad 2018-2021<br /> <br />
           <br />
            
            ⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CN etc.
            <br />
           <br />
            <br />
            ⚡ Apart from this, I have done courses on Cyber Security and Full Stack Development .
 
          </p>
          
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;