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
            <header class="header">
                  <div class="logo-box">
                      {/* <img src="./img/slogo.png" alt="logo" class="logo"/> */}
                  </div>
       
                  <div class="text-box">
                    <h1 class="heading-primary">
                          <span class="heading-primary-main">Single Page app</span>
                          <span class="heading-primary-sub">App That performs CRUD</span>
                    </h1>

                        <a href="#form" class="btn btn-white btn-animated" >Add country now</a>

                  </div>   
                 
            </header>
          

        {/* <div className='header'>
        <div className='text'>
        <div>
        <h1>creating a Single Page </h1>
        <span> </span>
        </div>
        <button  className='btn-header btn-animated btn'>Add country now</button>
        </div>       
        </div> */}
    
        <CountriesList countries={this.state.countries} />
        <Form />
      </div>
    );
  }
}

export default App;
