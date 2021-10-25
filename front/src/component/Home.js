import React, { useState, useEffect } from 'react';
import Loader from "./Loader";
import CountryItem from "./CountryItem";
import EmailForm from "./EmailForm";

function Home() {

    const [loading, setLoading] = useState(true);
    const [isSendEmailEnabled, setIsSendEmailEnabled] = useState(false);
    const [allCountries, setAllCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);

    /* handle country selection */
    const handleToggle = (id) => () => {
        const currentIndex = selectedCountries.indexOf(id);
        const newSelectedCountries = [...selectedCountries];

        if (currentIndex === -1) {
            newSelectedCountries.push(id);
        } else {
            newSelectedCountries.splice(currentIndex, 1);
        }
        setSelectedCountries(newSelectedCountries);
    };

    const handleValidationButton = () => {
        setIsSendEmailEnabled(true);
    }

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
            <h1>Choisissez un ou plusieurs pays dans cette liste :</h1>
            <div className='country-list-container'>
                {
                    allCountries.map((country) => {
                        return <CountryItem
                            key={country.id}
                            country={country}
                            handleToggle = { handleToggle }
                            selected = { selectedCountries.includes(country.id) }
                        />
                    })
                }
            </div>

            <div className='selected-country-list-container'>
                {selectedCountries.length > 0
                    ? <><h3>Vous avez séléctionné {selectedCountries.length} pays </h3><button onClick={ handleValidationButton }>Valider la sélection</button></>
                    : <h3>Vous n'avez séléctionné aucun pays </h3>
                }

            </div>
            {
                isSendEmailEnabled?
                    <EmailForm />
                    : ''
            }
        </div>
    );
}

export default Home;
