import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import counter from "../../Assets/Projects/counter.png";
import weather from "../../Assets/Projects/weather.png";
import scraper from "../../Assets/Projects/scraper.png";
import amplify from "../../Assets/Projects/amplify.png";
import chatgpt from "../../Assets/Projects/chatgpt.png";
import student from "../../Assets/Projects/student.png";
import chromeEx from "../../Assets/Projects/chromeEx.png";
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
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student}
              isBlog={false}
              title="REST API Demo"
              description= "A simple Spring Boot app with Reactjs and MySQL to demonstrate REST API."
              ghLink="https://github.com/ialisha/studentData"
             
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatgpt}
              isBlog={false}
              title="ChatGPT with Reactjs"
              description= "A simple web app that can handle requests from the React application and use the OpenAI API to generate responses with ChatGPT."
              ghLink="https://github.com/ialisha/react-chatGPT"
             
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amplify}
              isBlog={false}
              title="AWS Authentication "
              description="A simple Reactjs application using AWS Amplify to demonstrate authentication using AWS"
              ghLink="https://github.com/ialisha/react-amplify"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chromeEx}
              isBlog={false}
              title="Chrome Extension"
              description="A simple Chrome Extension using JavaScript to block social media websites"
              ghLink="https://github.com/ialisha/SocialBlocker"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scraper}
              isBlog={false}
              title="Web Scraper"
              description="A web Scraper created using Python's Beuatiful Soup to scrape data from Times of India Website"
              ghLink="https://github.com/ialisha/TOIScraper"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={counter}
              isBlog={false}
              title="Counter"
              description="A simple counter-App using React.js"
              ghLink="https://github.com/ialisha/counter-app"
    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Notifier"
              description="Extracts the current temperature from the website (url) and creates a notification(on system) on running the file (Windows 10 toasts)"
              ghLink="https://github.com/ialisha/weather_notifier"
                           
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
