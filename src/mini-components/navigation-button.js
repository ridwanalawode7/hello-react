import React from 'react';

const NavButton = (props) => {
  return (
    <div
      className='nav-button'
      role='button'
      aria-label='Menu Button'
      tabIndex='0'
    onClick={props.handleClick}>
      <svg id='svg9580' viewBox='0 0 25 39.406'>
        <g>
          <path
            className='circ1'
            d='m7.4786 3.7393a3.7393 3.7393 0 0 1-3.7393 3.7393 3.7393 3.7393 0 0 1-3.7393-3.7393 3.7393 3.7393 0 0 1 3.7393-3.7393 3.7393 3.7393 0 0 1 3.7393 3.7393z'
          />
          <path
            className='circ2'
            d='m7.4786 19.703a3.7393 3.7393 0 0 1-3.7393 3.7393 3.7393 3.7393 0 0 1-3.7393-3.7393 3.7393 3.7393 0 0 1 3.7393-3.7393 3.7393 3.7393 0 0 1 3.7393 3.7393z'
          />
          <path
            className='circ3'
            d='m7.4786 35.667a3.7393 3.7393 0 0 1-3.7393 3.7393 3.7393 3.7393 0 0 1-3.7393-3.7393 3.7393 3.7393 0 0 1 3.7393-3.7393 3.7393 3.7393 0 0 1 3.7393 3.7393z'
          />
        </g>
      </svg>
    </div>
  );
};

export default NavButton;
