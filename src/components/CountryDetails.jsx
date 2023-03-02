import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { useEffect, useState } from 'react';

import './CountryDetails.css';

function CountryDetails({ countries }) {
  const [country, setCountry] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const country = countries.find((country) => {
      return id === country.alpha3Code.toLowerCase();
    });

    if (country) {
      axios
        .get(
          `https://ih-countries-api.herokuapp.com/countries/${country.alpha3Code}`
        )
        .then((result) => {
          const countryData = result.data;

          setCountry(countryData);
        });
    }
  }, [id, countries]);

  return (
    <div className="country-details">
      {!country && <h3>No details found for this country!</h3>}

      {country && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt="The country's flag"
          />
          <h3>{country.name.official}</h3>
          <div className="capital">
            <p>Capital</p>
            <p>{country.capital[0]}</p>
          </div>
          <hr style={{ width: '100%' }} />
          <div className="area">
            <p>Area</p>
            <p>{country.area} km2</p>
          </div>
          <hr style={{ width: '100%' }} />
          <div className="borders">
            <p>Borders</p>
            <div className="borders-list">
              {country.borders.map((code) => {
                const returnedCountry = countries.find((country) => {
                  return country.alpha3Code === code;
                });

                return (
                  <Link
                    key={Date.now() * Math.random()}
                    to={`/${returnedCountry.alpha3Code.toLowerCase()}`}
                  >
                    <p>{returnedCountry.name.official}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default CountryDetails;
