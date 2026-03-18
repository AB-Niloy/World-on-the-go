import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {

    const [visited, setVisited] = useState(false)
    // console.log(country.area.area);

    const handleVisited = () => {
        // console.log('Button Clicked');
        // setVisited(true)

        // Basic System 
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // Second System
        // setVisited(visited ? false : true)

        // Third System
        setVisited(!visited)
        handleVisitedCountries(country);
    }

    return (
        // <div className={`country text-center border-lg ${visited ? 'country-visited' : 'country-not-visited'}`}>
        <div className={`country ${visited && 'country-visited'} text-center`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? 'Big Country' : 'Small Country'}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={() => { handleVisitedFlag(country.flags.flags.png) }}>Add Visited Flag</button>
        </div>
    );
};

export default Country;