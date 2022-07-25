import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo = (props) => {
  return (
    <Link to='/hello-react'>
      <div
        className='header-logo'
        role='img'
        aria-label='Ridwan Alawode Header Logo'>
        <div
          className='ra-logo-anim-cont'
          role='img'
          aria-label='Ridwan Alawode Spinning Logo Symbol'>
          <svg viewBox='0 0 49.970699 69.496101'>
            <g id='layer1'>
              <path
                d='M 0,19.5253 V 23.75 69.4961 h 49.9707 z m 3.5,8.4493 38.02148,38.0215 H 3.5 Z'
                id='path842'
                className='logo-triangle'
              />
              <path
                d='M 0,0 V 1.75 69.4961 H 25.49804 V 0 Z M 3.5,3.5 H 21.99804 V 65.9961 H 3.5 Z'
                id='rect844'
                className='logo-rectangle'
              />
              <path
                d='M 23.74804,0 C 10.65269,0 -3e-5,10.6546 0,23.75 3e-5,36.8453 10.65273,47.498 23.74804,47.498 36.84335,47.498 47.49606,36.8453 47.49609,23.75 47.49612,10.6546 36.8434,0 23.74804,0 Z m 0,3.5 c 11.20381,0 20.24808,9.0461 20.24805,20.25 -3e-5,11.2037 -9.04427,20.248 -20.24805,20.248 C 12.54427,43.998 3.50002,34.9537 3.5,23.75 3.49997,12.5461 12.54423,3.5 23.74804,3.5 Z'
                id='circle846'
                className='logo-circle'
              />
            </g>
          </svg>
        </div>
        <div className='logo-plus'>+</div>
        <div className='react-spin'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='-11.5 -10.23174 23 20.46348'>
            <g className='react'>
              <circle cx='0' cy='0' r='2.05' fill='#61dafb' />
              <g stroke='#61dafb' strokeWidth='1' fill='none'>
                <ellipse rx='11' ry='4.2' />
                <ellipse rx='11' ry='4.2' transform='rotate(60)' />
                <ellipse rx='11' ry='4.2' transform='rotate(120)' />
                
              </g>
            </g>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default HeaderLogo;
