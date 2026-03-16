import React from 'react';

const Country = ({country}) => {
    console.log(country.population.population);
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>Population: {country.population.population}</p>
        </div>
    );
};

export default Country;