import React, { useState } from 'react';
import './index.css';
import Header from './mini-components/header';
import NavMenu from './mini-components/nav';
import CountryFlag from './country-flags/CountryFlag';
import CounterApp from './counter-excercise/CounterEx';
import CardHolder from './card-holder';
import Country from './country-flags/country';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Clock from './clock/clock';
const App = () => {
  let [navState, setNaVState] = useState(false);

  function showNav() {
    setNaVState(true);
  }
  function hideNav() {
    setNaVState(false);
  }
  return (
    <div>
      <HashRouter>
        <Header handleClick={showNav} />
        <NavMenu showMenu={navState} handleClick={hideNav} />
        <main>
          <Routes>
            <Route path='/' element={<CardHolder />} />
            <Route path='/hello-react' element={<CardHolder />} />
            <Route
              path='/hello-react/countries-info'
              element={<CountryFlag />}
            />
            <Route
              path='/hello-react/countries-info/country/:code'
              element={<Country />}
            />
            <Route path='/hello-react/counter' element={<CounterApp />} />
            <Route path='/hello-react/clock' element={<Clock />} />
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
};

export default App;
