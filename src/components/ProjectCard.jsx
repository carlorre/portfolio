import React from 'react'
import './ProjectCard.css'

const ProjectCard = (project) => (
  <div className='project-card'>
    <div className="project-card-text">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>{project.technologyUsed}</p>
      <div className="buttons-container">
        <a href={project.liveDemo}>hi</a>
        <a href={project.gitHubLink}>poo</a>
      </div>
    </div>
    <div className="media-container">
      <img className="project-media" src={project.media} alt=""/>
    </div>

  </div>
)

export default ProjectCard
