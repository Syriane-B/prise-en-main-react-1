import React from 'react';

function CountryItem ( { country, handleToggle, selected } ) {

    return (
        <div className='chip' style={{ backgroundColor: selected? '#7bd38a' : '#76bdbd' }} onClick={handleToggle(country.id)} >
            <span>{country.name}</span>
        </div>
    );
}

export default CountryItem;
