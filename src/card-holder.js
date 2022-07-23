import React from 'react';
import ProjectCard from './mini-components/project-card';
import { Link } from 'react-router-dom';
// import projectIdMatch from './projectIdMatch';

const projects = [
  {
    projectId: 1,
    projectName: 'Country Flag',
    linkPath: '/country-flag',
  },
  {
    projectId: 2,
    projectName: 'Counter App',
    linkPath: '/counter-app',
  },
];

const CardHolder = (props) => {
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
