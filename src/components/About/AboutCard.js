import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alisha Irshad </span>
            from <span className="purple"> Toronto, Canada.</span>
           
            <br />
            <br />
           I am a Software Developer, specialising in frontend web development arena. I have been developing websites using ReactJs and Spring Boot. I am familiar with Git/GitHub, REST API, AWS CLI, AWS DynamoDB, AWS IAM, Amazon EC2, Web Services/Microservices, Linux/Unix, SQL, Python. I am highly motivated and hardworking and I believe that we Software Developers can solve problems or optimise solutions by efficient use of Technology.
          </p>
          
       
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
