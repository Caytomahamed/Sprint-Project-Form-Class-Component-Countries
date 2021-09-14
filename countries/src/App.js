import React, { Component } from 'react';
import axios from 'axios'
// Import Components here
import CountriesList from './components/CountriesList'

import Form from './components/Form'
import './App.css';


class App extends Component {

  // Build Your constructor with state of "countries: []"
  constructor(){
    super()
    this.state = {
      countries: []
    }
  }
  // Use componentDidMount to make a call to API call to http://localhost:3333/countries and set it to the state.


  componentDidMount(){
    
    axios.get('http://localhost:3333/countries').
    then(res => {
     const data = res.data
     this.setState({
       countries: data
     })
    })
    
  }


  render() {
    // console.log(this.state.countries);
    return (
      <div >
        <div className='header'>
        <div className='text'>
        <div>
        <h1>creating a Single Page </h1>
        <span> Application That performs CRUD (Create, Read, Update, Delete) operations on a locally hosted API, Countries.</span>
        </div>
        <button  className='btn-header'>Add country now</button>
        </div>       
        </div>
    
        <CountriesList countries={this.state.countries} />
        <Form />
      </div>
    );
  }
}

export default App;
