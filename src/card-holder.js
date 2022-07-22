import React from 'react';
import ProjectCard from './mini-components/project-card';
// import projectIdMatch from './projectIdMatch';

const projects = [
  {
    projectId: 1,
    projectName: 'Country Flag',
  },
  {
    projectId: 2,
    projectName: 'Counter App',
  },
];

const CardHolder = (props) => {
  return (
    <div className='card-holder'>
      {projects.map((x, y) => (
        <ProjectCard
          key={y}
          onLinkClick={props.onLinkClick}
          projectId={x.projectId}
          projectName={x.projectName}
        />
      ))}
    </div>
  );
};

export default CardHolder;
