import { useParams } from "react-router-dom";
function CountryDetails({countries}){
   const {id} = useParams()
   const country = countries.find(country => {
    return id === country.alpha3Code.toLowerCase()
   })
   console.log('ID is:', id)

    const countryCode = country.alpha2Code.toLowerCase();
   console.log(country)
    return(
        <div className="country-detail">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryCode}.png`}/> 
            <h3>{country.name.official}</h3>
            <div>
                <p>Capital</p>
                <p>{country.capital[0]}</p>
            </div>
            <div>
                <p>Area</p>
                <p>{country.area} km2</p>
            </div>
            <div>
                <p>Borders</p>
                {country.borders.map((code)=>{
                    const returnedCountry = countries.find((country)=>{
                        if (country.alpha3Code === code)
                        return country
                    })
                    return <p key={Date.now()*Math.random()}> {returnedCountry.name.official} </p>
                })}
            </div>

        </div>
    )
}
export default CountryDetails