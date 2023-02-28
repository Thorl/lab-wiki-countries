import { Link } from 'react-router-dom';

import './CountriesList.css';

export const CountriesList = ({ countries }) => {
  return (
    <div className="countriesList">
      {countries.map((country) => {
        const countryCode = country.alpha2Code.toLowerCase();
        return (
          <Link
            className="countriesList__countryCard"
            to={`/country-details/:${country.alpha3Code.toLowerCase()}`}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${countryCode}.png`}
              alt="Flag"
            />
            <p>{country.name.official}</p>
          </Link>
        );
      })}
    </div>
  );
};
