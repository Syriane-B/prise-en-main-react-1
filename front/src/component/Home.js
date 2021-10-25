import React, { useState, useEffect } from 'react';
import Loader from "./Loader";

function Home() {

    const [loading, setLoading] = useState(true);
    const [allCountries, setAllCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);

    useEffect(() => {
        //api request
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then(data => {
                const countries = [];
                data.forEach(country => {
                    let newCountry = {
                        "id": country.alpha2Code,
                        "name": country.translations.fr,
                        "flag": country.flag,
                        "capital": country.capital,
                        "language": country.languages[0].name,
                    }
                    countries.push(newCountry);
                });
                setAllCountries( countries );
                setLoading(false);
            });
    }, []);

    if(loading) {
        return (
            <Loader />
        )
    }
    return (
            <div className="home-container">
                Choisissez un pays dans cette liste :


            </div>
    );
}

export default Home;
