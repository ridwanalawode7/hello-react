import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './country.css';

const Country = () => {
  const { code } = useParams();
  const api_url = `https://restcountries.com/v3.1/alpha/${code}`;
  let [country, setCountry] = useState([]);
  let [nameLink, setNameLink] = useState('');

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then(
        (result) => {
          setCountry(result);
          console.log(result[0].name.common);
          setNameLink(result[0].name.common.replace(' ', '_'));
        },
        (error) => {
          console.log('Bad stuff just happened');
        },
      );
  }, []);

  return (
    <div className='country-profile'>
      <div className='profile-cont'>
        <div className='profile-head-cont'>
          <div className='profile-banner'>
            <img
              src={country.length ? country[0].flags.svg : ''}
              className='banner-image'
            />
          </div>
          <div className='profile-img'>
            <h3>{country.length ? country[0].cca3 : ''}</h3>
          </div>
        </div>
      </div>

      <div className='country-info'>
        <div className='country-name'>
          <h1>{country.length ? country[0].name.official : ''}</h1>
        </div>
        <div className='country-capital'>
          <h4>
            <span className='small-caps'>CAPITAL:</span>{' '}
            {country.length ? country[0].capital : ''}
          </h4>
        </div>
        <div className='country-region'>
          <h4>
            <span className='small-caps'>REGION:</span>{' '}
            {country.length ? country[0].region : ''}
          </h4>
        </div>
        <div className='additional-info'>
          <div className=''></div>
        </div>
        <div className='learn-more'>
          <a
            href={
              nameLink ? `https://en.m.wikipedia.org/wiki/${nameLink}` : ''
            }>
            Learn More&#128279;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Country;
