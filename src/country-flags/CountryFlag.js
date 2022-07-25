import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './country-flag.css';
import { Link } from 'react-router-dom';

const CountryFlag = () => {
  const api_url = 'https://restcountries.com/v3.1/all';
  let [countryNo, setCountryNo] = useState('over 200');
  let [searchSuggest, setSearchSuggest] = useState([]);
  let [results, setResults] = useState([]);
  let [countries, setCountries] = useState([]);
  let [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then(
        (result) => {
          setCountries(result);
          setCountryNo(result.length);
        },
        (error) => {
          console.log('Bad stuff just happened');
        },
      );
  }, []);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (e.target.value) {
      let filtList = getSuggetions(e.target.value);
      setSearchSuggest(filtList);
    } else {
      setSearchSuggest([]);
    }
  }

  function getSuggetions(value) {
    function isMatched(item) {
      return item.name.common.includes(value);
    }

    let matchedCountries = countries.filter(isMatched);
    return matchedCountries;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchSuggest([]);
    let searchParam = e.target[0].value;
    if (searchParam) {
      let resultList = searchObject(searchParam);
      setResults(resultList);
    } else {
      setResults([]);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    setSearchSuggest([]);
    setSearchText(e.target.innerText);
    let searchParam = e.target.innerText;
    if (searchParam) {
      let resultList = searchObject(searchParam);
      setResults(resultList);
    } else {
      setResults([]);
    }
  }

  function searchObject(value) {
    function isMatched(item) {
      return item.name.common.includes(value);
    }

    let matchedCountries = countries.filter(isMatched);
    return matchedCountries;
  }

  return (
    <div className='cfh'>
      <div>
        <h1 className='country-flag-header'>Countries Info</h1>
      </div>
      <div>
        <h3 className='dyk'>
          There are currently <span className='country-no'>{countryNo}</span>{' '}
          countries in the world
        </h3>
      </div>

      <div className='form-cont'>
        <form className='country-form' onSubmit={handleSubmit}>
          <div className='input-cont'>
            <div className='country-search-cont'>
              <input
                onChange={handleChange}
                aria-label='Search Countries'
                id='searchCountries'
                type='text'
                placeholder='Search Countries'
                className='country-search'
                value={searchText}
              />
              <div className='search-suggestion'>
                {searchSuggest.length
                  ? searchSuggest.map((x, y) => (
                      <div onClick={handleClick} className='suggest' key={y}>
                        {x.name.common}
                      </div>
                    ))
                  : ''}
              </div>
            </div>
            <div className='search-btn-cont'>
              <input
                className='country-search-btn'
                type='submit'
                value='Search'
              />
            </div>
          </div>
        </form>
      </div>

      <div className='search-results'>
        {results.length
          ? results.map((x, y) => (
              <Link key={y} to={`country/${x.cca3}`}>
                <div className='result'>
                  <div className='result-flag'>
                    <img src={x.flags.svg} />
                  </div>
                  <div className='result-name'>
                    <div className='common-name'>{x.name.common}</div>
                    <div className='official-name'>{x.name.official}</div>
                  </div>
                </div>
              </Link>
            ))
          : ''}
      </div>
      <Link to={`country/test`}>
        TL
      </Link>
    </div>
  );
};

export default CountryFlag;
