import React from 'react'
import './ProjectCard.css'

const ProjectCard = (project) => (
  <div className='project-card'>
    <div className="project-card-text">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>{project.technologyUsed}</p>
      <div className="buttons-container">
        <a className="card-button" href={project.liveDemo}><i class="card-link-icon fas fa-play-circle"></i>View Live Demo</a>
        <a className="card-button" href={project.gitHubLink}><i class="card-link-icon fab fa-github"></i>Github Link</a>
      </div>
    </div>
    <div className="media-container">
      <a href={project.liveDemo}><img className="project-media" src={project.media} alt=""/></a>
      
    </div>

  </div>
)

export default ProjectCard
