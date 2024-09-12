import React from 'react';
import '../App.css'
const CountryCard = props => {

  const {country} = props
  // console.log(country);
  return (
    <div className="card">
      {/* Display single country here */}
      <div className='box'>

      <div className='content'>
       <h2>{country.name}</h2>
       <p>Population : {country.population}</p>
      <p>Land_area : {country.land_area}</p>
      </div>
      </div>

    </div>
  );
};


export default CountryCard;

