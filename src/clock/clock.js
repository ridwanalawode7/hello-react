import React, { useState } from 'react';
import './clock.css';

const Clock = () => {
  let [currentTime, setCurrentTime] = useState(new Date());
  let [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
  let [currentSecs, setCurrentSecs] = useState(new Date().getSeconds());
  let [currentHr, setCurrentHr] = useState(new Date().getHours());
  function update() {
    let date = new Date();
    setCurrentTime(new Date());
    setCurrentMinute(date.getMinutes());
    setCurrentSecs(date.getSeconds());
    setCurrentHr(getRealPosition(date));
  }

  function getRealPosition(date) {
    let hr = date.getHours();
    let min = date.getMinutes();
    let decMin = min / 60;
    return hr + decMin;
  }

  setTimeout(update, 1000);

  return (
    <div className='clock'>
      <div className='clock-cont'>
        <svg viewBox='0 0 86.421425 86.421424'>
          <defs id='defs2' />
          <g id='layer1'>
            <circle
              // style='fill:none;fill-opacity:0.944767;stroke:#000000;stroke-width:1;stroke-linejoin:bevel;stroke-dasharray:none;stop-color:#000000'
              id='path344'
              cx='43.210712'
              cy='43.210712'
              r='25.798727'
              className='frame'
            />
            <path
              // style='fill:none;fill-opacity:0.944767;stroke:#000000;stroke-width:5;stroke-linejoin:bevel;stroke-dasharray:none;stop-color:#000000'
              id='circle953'
              className='second-hand'
              style={{ transform: `rotateZ(${(currentSecs / 60) * 360}deg)` }}
              d='m 43.210712,14.709654 2.809449,-4.8661069 -5.618898,3e-7 z'
            />
            <path
              // style='fill:none;stroke:#0000ff;stroke-width:5;stroke-linecap:butt;stroke-linejoin:miter;stroke-dasharray:none;stroke-opacity:1'
              d='M 43.210712,43.210712 V 0'
              className='long-hand'
              //   transform={`rotate(${(currentMinute / 60 * 360)}deg)`}
              style={{ transform: `rotateZ(${(currentMinute / 60) * 360}deg)` }}
              id='path1147'
            />
            <path
              // style='fill:#ff0000;stroke:#ff0000;stroke-width:5;stroke-linecap:butt;stroke-linejoin:miter;stroke-dasharray:none;stroke-opacity:1'
              d='M 43.210712,43.210712 V 24.916526'
              className='short-hand'
              style={{ transform: `rotateZ(${(currentHr / 12) * 360}deg)` }}
              id='path1149'
            />
          </g>
        </svg>
        <div>
          <h2 className='digital'>
            {currentTime.getHours()}:
            {currentMinute.toString().length > 1
              ? currentMinute
              : `0${currentMinute}`}
            :{currentSecs.toString().length > 1 ? currentSecs : `0${currentSecs}`}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Clock;
