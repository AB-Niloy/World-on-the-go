import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountries = (country) => {
        // console.log('Clicked', country);
        // const newVisitedCountries = [...visitedCountries, country]
        let newVisitedCountries;
        newVisitedCountries = visitedCountries.includes(country) ? visitedCountries.filter(c => c !== country) : [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag = (flag) => {
        // console.log('flag need to be added', flag);
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);
    return (
        <div>
            <h1 className='text-center '>Total Countries: {countries.length}</h1>
            <h3 className='text-center '>Total Country Visited: {visitedCountries.length}</h3>
            <h3 className='text-center '>Total Flags Visited: {visitedFlags.length}</h3>
            <ol className='list-center'>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container text-center'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;