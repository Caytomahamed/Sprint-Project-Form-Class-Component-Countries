import axios from 'axios';
import React,{useState} from 'react';

function Form() {

  // 1. Set up state for form
  const initialState = {
    id:Date.now(),
    name:'',
    population:'',
    land_area :''
  }

    const [form,setForm ] = useState(initialState)
    console.log(form);
  // 2. Create "handleChange" function to handle form changes and add changes to above state

   const handleChange= event => {
     const  text={...form, [event.target.name] : event.target.value}

     setForm(text)
   }
  // 3. Create "handleSubmit" function to send data to http://localhost:3333/countries using POST request.
        // Make sure to update your countries list to show the recently added country.

    const handleSubmit = event => {
      // event.preventDefault();
      axios.post('http://localhost:3333/countries',form).
      then(res => {
        console.log(res);
        setForm(initialState)
      })
    }
    return (
      <div className='form-component'>
      {/* Build your form here */}
      <div className='container form-box'>

      <div className='form-bg'>
      <form  onSubmit={handleSubmit}>

        <label htmlFor='label'>
          Name 
          <input 
          type='text' 
          name='name'
          placeholder='Enter the country Name'
          value={form.name}
          onChange={handleChange}
          />
        </label>

        <label htmlFor='label'>
          Population
          <input 
          type='number' 
          name='population'
          placeholder='Enter the country Population'
          value={form.population}
          onChange={handleChange}
          />
        </label>
        <label htmlFor='label'>
          Land_area
          <input 
          type='number' 
          name='land_area'
          placeholder='Enter the country Land_area'
          value={form.land_area}
          onChange={handleChange}
          />
        </label>

        <button className='submit'>Submit</button>

      </form>
      </div>
      </div>
      </div>
    );

}

export default Form;
