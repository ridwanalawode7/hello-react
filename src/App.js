import React, { useState } from 'react';
import CardHolder from './card-holder';
import './index.css';
import Header from './mini-components/header';
import ViewController from './ViewController';
import CountryFlag from './country-flags/CountryFlag';
import CounterApp from './counter-excercise/CounterEx';
import { Outlet } from 'react-router-dom';
// import projectIdMatch from './projectIdMatch';

const App = () => {
  function onLinkClick(Id) {
    for (const iterator of projectIdMatch) {
      if (iterator.pageId == Id) {
        setPage(iterator.pageEl);
      }
    }
  }

  const projectIdMatch = [
    {
      pageEl: <CardHolder onLinkClick={onLinkClick} />,
      pageId: 'root001',
    },
    {
      pageEl: <CountryFlag />,
      pageId: 1,
      projectId: 1,
      projectName: 'Country Flag',
    },
    {
      pageEl: <CounterApp />,
      pageId: 2,
      projectId: 1,
      projectName: 'Counter App',
    },
  ];

  const [page, setPage] = useState(<CardHolder onLinkClick={onLinkClick} />);

  return (
    <div>
      <ViewController page={page} />
      <Outlet />
    </div>
  );
};

export default App;
