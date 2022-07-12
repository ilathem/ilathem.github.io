import React from 'react';
import '../styles/project.scss';

interface ProjectProps {
  previewImg: string,
  tech: string,
  ghLink: string,
  previewLink?: string,
  title: string,
  desc: string,
}

function Project(props:ProjectProps) {

  return (
    <div className="project-container">
      <div className="project-text-section">
        <p className="project-title">{props.title}</p>
        <p className="project-desc">{props.desc}</p>
        <p className="project-tech">Technologies Used: {props.tech}</p>
        <p className="project-ghLink" onClick={() => {
          window.open(props.ghLink, '_blank');
        }}>GitHub Repo Link</p>
      </div>
      <div className="project-picture-section">
        <img className="project-preview" src={require(`../img/${props.previewImg}`)} alt="Project preview" />
      </div>
    </div>
  )

}

export default Project;