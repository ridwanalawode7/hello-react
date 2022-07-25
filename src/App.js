import React, { useState } from 'react';
import './index.css';
import Header from './mini-components/header';
import NavMenu from './mini-components/nav';
import CountryFlag from './country-flags/CountryFlag';
import CounterApp from './counter-excercise/CounterEx';
import CardHolder from './card-holder';
import Country from './country-flags/country';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <Header handleClick={showNav} />
        <NavMenu showMenu={navState} handleClick={hideNav} />
        <main>
          <Routes>
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
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
