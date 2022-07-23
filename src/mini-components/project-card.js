import React from 'react';
import CountryFlag from '../country-flags/CountryFlag';

const ProjectCard = (props) => {
    // const pageHandler = props.setPage;
  const pId = props.projectId;
    function handleCardClick(e) {
  props.onLinkClick(pId)
    }

  return (
    <div className='card'>
      <div className='card-thumbnail'>
        <h2 className='thumbnail-no'>
          {pId.toString().length == 1 ? `0${pId}` : pId}
        </h2>
      </div>
      <div className='project-desc'>
        <div className='project-name'>{props.projectName}</div>
        <div className='link-icon'>
          <svg viewBox='0 0 23.98045 23.98045'>
            <g id='layer1'>
              <path
                id='rect1517'
                d='m 14.933455,0 v 2.49959 h 4.17959 c 0.186544,0 0.3672,0.02146 0.540019,0.05994 l -7.938017,7.93647 1.767334,1.7694 7.938534,-7.93854 c 0.03855,0.17297 0.05943,0.3533 0.05943,0.54002 V 9.04647 H 23.98045 V 4.86688 C 23.980448,2.19201 21.78793,0 19.113045,0 Z M 4.867403,2.84168 C 2.192524,2.84168 0,5.03369 0,7.70857 v 11.40447 c 0,2.67488 2.192524,4.86741 4.867403,4.86741 h 11.403955 c 2.674881,0 4.867403,-2.19253 4.867403,-4.86741 v -7.22643 h -2.500105 v 7.22643 c 0,1.33312 -1.034179,2.3673 -2.367298,2.3673 H 4.867403 c -1.333118,0 -2.367297,-1.03418 -2.367297,-2.3673 V 7.70857 c 0,-1.33312 1.034179,-2.36678 2.367297,-2.36678 h 7.226432 V 2.84168 Z'
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};



export default ProjectCard;
