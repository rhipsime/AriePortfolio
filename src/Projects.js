import React from 'react';
import Project from './Project'; // Import the Project component
import projectsData from './projects.json'; // Import the project data
import { Container, Row, Col } from 'react-bootstrap';


const Projects = () => {
  return (
    <Container>
      <Row xs={1} md={2} lg={4} className="g-4">
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