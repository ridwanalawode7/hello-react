import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexes from '../project-indexes';

const NavMenu = (props) => {
  const projects = ProjectIndexes();

  return (
    <nav className={props.showMenu ? 'menu-opened' : ''}>
      <div
        className='close-menu-btn'
        role='button'
        aria-label='Menu Close Button'
        tabIndex='0'
        onClick={props.handleClick}>
        <svg viewBox='0 0 95.468071 57.577881'>
          <defs id='defs2' />
          <g id='layer1'>
            <path
              id='path186'
              d='m 51.354858,33.371089 26.569066,1e-6 -17.72656,17.726567 6.48022,6.480225 L 95.468074,28.788941 66.677584,0 l -6.48022,6.480225 17.72656,17.726567 -26.569066,-1e-6 z'
            />
            <rect
              id='rect7853'
              width='26.569065'
              height='9.164299'
              x='0'
              y='24.206791'
              ry='3.5660048e-07'
            />
          </g>
        </svg>
      </div>
      <div className='nav-container'>
        <Link to={'/hello-react'}>
          <div className='navItem' onClick={props.handleClick}>
            Home
          </div>
        </Link>
        {projects.map((x, y) => (
          <Link to={x.linkPath} key={y}>
            <div className='navItem' onClick={props.handleClick}>
              {x.projectName}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavMenu;
