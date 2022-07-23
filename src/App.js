import React from 'react';
import './index.css';
import Header from './mini-components/header';
import CountryFlag from './country-flags/CountryFlag';
import CounterApp from './counter-excercise/CounterEx';
import CardHolder from './card-holder';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<CardHolder />} />
            <Route path='/countries-info' element={<CountryFlag />} />
            <Route path='/counter' element={<CounterApp />} />
          </Routes>
        </main>
      </BrowserRouter>     
    </div>
  );
};

export default App;
