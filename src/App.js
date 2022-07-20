import React from 'react';
import './index.css';
import ColorToggle from './mini-components/color-mode-toggle';
import HeaderLogo from './mini-components/header-logo';



const Header = () => {
  return (
    <header>
          <div className='header-container'>
              <div className='box-holder'></div>
        <ColorToggle />
        <HeaderLogo />
      </div>
    </header>
  );
};

const App = () => {
  return (
    <div>
      {/* <header>Hello From React</header> */}
      <Header />
    </div>
  );
};

export default App;
