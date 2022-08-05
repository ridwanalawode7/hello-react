import React from 'react';
import ProjectCard from './mini-components/project-card';
import { Link } from 'react-router-dom';
import ProjectIndexes from './project-indexes';
import './card-holder.css'

const CardHolder = (props) => {
  const projects = ProjectIndexes()

  return (
    <div>
      <h1 className='holder-title'>Hello React! &#129303;</h1>
      <p className='hello-message'>
        Check out these mini React js projects. &#128524;
      </p>
      <div className='card-holder'>
        {projects.map((x, y) => (
          <Link to={x.linkPath} key={y}>
            <ProjectCard projectId={x.projectId} projectName={x.projectName} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardHolder;
