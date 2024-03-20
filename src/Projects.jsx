import React from 'react';
import Project from './Project'; // Import the Project component
import projectsData from './projects.json'; // Import the project data
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  return (
    <Container className="projects-container"> 
      <Row xs={1} md={2} className="g-4"> {/* Change lg={4} to md={2} */}
        {projectsData.map((project, index) => (
          <Col key={index}>
            <Project project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
