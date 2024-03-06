import React from 'react';
import Project from './Project'; // Import the Project component
import projectsData from './projects.json'; // Import the project data

const Projects = () => {
  return (
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}

export default Projects;
