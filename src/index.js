import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountryFlag from './country-flags/CountryFlag';
import CounterApp from './counter-excercise/CounterEx';
import ViewController from './ViewController';
import Header from './mini-components/header';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);
root.render(
  <div>
    <Header />

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/country-flag' element={<CountryFlag />} />
          <Route path='/counter-app' element={<CounterApp />} />
          <Route
            path='*'
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>,
);
