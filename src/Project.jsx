import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="project">
      <h2>{project.title}</h2>
      <div className="button-container"> {/* Wrap buttons in a div */}
      <img src={require(`${project.image}`)} alt={project.title} style={{ maxWidth: '100%', height: 'auto' }} />
      <p><a href={project.deployedLink}>Deployed Version</a></p>
      <p><a href={project.githubLink}>GitHub Repository</a></p>
    </div>
    </div>
  );
}

export default Project;


