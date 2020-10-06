import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../projectsArray'
import './Projects.css'

const Projects = () => (
  <div className="project-section">
    <h1>Projects</h1>
    {projects.map((project, i)=> (
      <ProjectCard 
        key= {i}
        name= {project.name}
        description = {project.description}
        technologyUsed = {project.technologyUsed}
        gitHubLink = {project.gitHubLink}
        liveDemo = {project.liveDemo}
        media = {project.media}
      />
    ))}
  </div>
)

export default Projects
