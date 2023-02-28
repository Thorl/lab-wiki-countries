import { Routes, Route } from 'react-router-dom';
import { useState , useEffect } from 'react';

import { CountriesList } from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import { Navbar } from './components/Navbar';
import './App.css';
import axios from 'axios';

// import countriesData from './countries.json';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
     axios.get(' https://ih-countries-api.herokuapp.com/countries')
     .then((result)=>{
      setCountries(result.data)
      console.log(result.data)
     })
  },[])
  return (
    <div className="App">
      <Navbar />
      <div className="country-container">
      { countries && <CountriesList countries={countries}/>}
      <Routes>
        {/* <Route path="/" element={<CountriesList countries={countries} />} /> */}
        <Route path="/:id" element={<CountryDetails countries={countries}/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
