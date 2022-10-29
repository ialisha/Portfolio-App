import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import counter from "../../Assets/Projects/counter.png";
import weather from "../../Assets/Projects/weather.png";
import scraper from "../../Assets/Projects/scraper.png";

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
