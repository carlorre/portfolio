import React, { useState } from 'react';
import './ProjectCard.css';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

const ProjectCard = (project) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-card">
      <div className="project-card-text">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <p>{project.technologyUsed}</p>
        <div className="buttons-container">
          {project.liveDemo ? (
            <a className="card-button" href={project.liveDemo}>
              <i className="card-link-icon fas fa-play-circle"></i>
              <span className="project-link-text">Live Demo</span>
            </a>
          ) : null}
          <a className="card-button" href={project.gitHubLink}>
            <i className="card-link-icon fab fa-github"></i>
            <span className="project-link-text">Github Link</span>
          </a>
          {project.video ? (
            <div onClick={() => setIsOpen(true)} className="card-button">
              <i className="card-link-icon fas fa-video"></i>
              <span className="project-link-text">Video Demo</span>
            </div>
          ) : null}
          <ModalVideo
            isOpen={isOpen}
            channel="vimeo"
            videoId={project.video}
            onClose={() => setIsOpen(false)}
          />
        </div>
      </div>
      <div className="media-container">
        <a href={project.liveDemo}>
          <img className="project-media" src={project.media} alt="" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
