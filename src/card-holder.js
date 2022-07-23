import React from 'react';
import ProjectCard from './mini-components/project-card';
import { Link } from 'react-router-dom';
import ProjectIndexes from './project-indexes';

const CardHolder = (props) => {
  const projects = ProjectIndexes()

  return (
    <div className='card-holder'>
      {projects.map((x, y) => (
        <Link to={x.linkPath} key={y}>
          <ProjectCard
            projectId={x.projectId}
            projectName={x.projectName}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardHolder;
