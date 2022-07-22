import React from 'react';
const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('ridBioTheme');

if (currentTheme == 'light') {
  document.body.classList.toggle('light-theme');
} else if (currentTheme == 'dark') {
  document.body.classList.toggle('dark-theme');
}

function handleToggle() {
  if (prefersDarkTheme.matches) {
    document.body.classList.toggle('light-theme');
    var theme = document.body.classList.contains('light-theme')
      ? 'light'
      : 'dark';
  } else {
    document.body.classList.toggle('dark-theme');
    var theme = document.body.classList.contains('dark-theme')
      ? 'dark'
      : 'light';
  }
  localStorage.setItem('ridBioTheme', theme);
}
const ColorToggle = () => {
  return (
    <div
      id='clr-schm-btn'
      className='color-scheme-button'
      role='button'
      aria-label='Toggle Dark Mode'
      tabIndex='0'
    onClick={handleToggle}>
      <svg
        viewBox='0 0 54.927399 54.927399'
        version='1.1'
        className='clr-schm-btn'>
        <defs id='defs10405' />
        <g id='layer1'>
          <path
            id='path3572'
            d='m 25.539527,0 v 8.079611 h 3.847827 V 0 Z M 9.404078,6.68383 6.683313,9.404594 l 5.713347,5.71283 2.720764,-2.720764 z m 36.118725,0 -5.712829,5.71283 2.720764,2.720764 5.712829,-5.71283 z M 27.486695,13.171289 A 14.25227,14.297606 0 0 0 13.234335,27.469125 14.25227,14.297606 0 0 0 27.486695,41.766443 14.25227,14.297606 0 0 0 41.739055,27.469125 14.25227,14.297606 0 0 0 27.486695,13.171289 Z M 0,25.540043 v 3.847828 h 8.080127 v -3.847828 z m 46.847787,0 v 3.847828 h 8.07961 v -3.847828 z m -34.450611,14.269414 -5.713863,5.713863 2.720765,2.720764 5.713863,-5.713863 z m 30.133045,0 -2.720764,2.720764 5.713346,5.713863 2.720764,-2.720764 z M 25.539527,46.84727 v 8.080127 h 3.847827 V 46.84727 Z'
            className='sun'
          />
          <path
            id='path2250'
            className='moon'
            d='M 46.045768,3.9222412 45.21016,6.3727376 42.760181,7.2078288 45.21016,8.0444702 46.045768,10.4929 46.883443,8.0444702 49.331873,7.2078288 46.883443,6.3727376 Z m -33.87247,7.3668438 -1.295011,3.797184 -3.7945999,1.295011 3.7945999,1.295011 1.295011,3.795118 1.297596,-3.795118 3.7946,-1.295011 -3.7946,-1.295011 z M 30.795536,8.7059285 c 0.02703,0.043347 0.05492,0.086081 0.08165,0.1297079 0.08466,0.1382402 0.167612,0.2774688 0.24908,0.4185791 7.929261,13.5769685 -3.927762,30.4578815 -19.208129,28.3822465 -0.151788,-0.022 -0.302543,-0.04575 -0.453719,-0.07131 -0.07699,-0.01308 -0.15366,-0.02792 -0.230477,-0.04186 5.367938,8.611799 16.895077,11.54466 25.742098,6.436816 C 46.00713,38.746009 49.182516,26.92401 43.968376,17.892965 41.076796,12.884592 36.15054,9.6790915 30.795536,8.7059285 Z M 5.6058594,38.305672 4.7702515,40.756169 2.3207886,41.592293 4.7702515,42.427901 5.6058594,44.876847 6.4435343,42.427901 8.8924805,41.592293 6.4435343,40.756169 Z m 40.4399086,4.456059 -0.835608,2.450496 -2.449979,0.835608 2.449979,0.836125 0.835608,2.448946 0.837675,-2.448946 2.448946,-0.836125 -2.448946,-0.835608 z'
          />
        </g>
      </svg>
    </div>
  );
};

export default ColorToggle;
