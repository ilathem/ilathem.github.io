import React from 'react';
import Project from './Project';
import "../styles/projects.scss"

function Projects() {

  return (
      <div className="projects-container">
        <h1 className="projects-header">Projects</h1>
        <div className='projectListContainer'>
          <Project
            previewImg='portfolio-preview.png'
            title="Portfolio"
            desc="Personal portfolio site"
            tech="TypeScript, SCSS, React"
            ghLink="https://github.com/ilathem/ilathem.github.io"
          />
        </div>
      </div>
  )
}

export default Projects;