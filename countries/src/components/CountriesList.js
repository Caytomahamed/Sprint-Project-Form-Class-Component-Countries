import React, { Component } from 'react';
import CountryCard from './CountryCard'
import '../App.css'
// Import Components here

class CountriesList extends Component {

  constructor(...props){
    super(...props)
  }

  render() {
    // console.log(this.props.countries);
    return (
      <div className="container">
        <div className='u-center'>
        <h1 className='sub-title u-center'>List of All Countries</h1>
        </div>
        
      
        <ul className='card-box'>
         {/* Loop through all countries and send them to 'CountryCard' to display them */}
        {this.props.countries.map(country => {
              return  <CountryCard country={country} key={country.id}/>
        })}
        </ul>
      </div>
    );
  }
}


export default CountriesList;
