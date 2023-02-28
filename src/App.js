import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { CountriesList } from './components/CountriesList';
import { Navbar } from './components/Navbar';
import './App.css';

import countriesData from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesData);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
