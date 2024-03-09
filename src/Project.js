import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="project">
      <h2>{project.title}</h2>
      <img src={require(`${project.image}`)} alt={project.title} className="img-fluid" />
      <p><a href={project.deployedLink}>Deployed Version</a></p>
      <p><a href={project.githubLink}>GitHub Repository</a></p>
    </div>
  );
}

export default Project;


