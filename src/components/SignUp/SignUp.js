import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

//components

//styles
import {Heading1} from '../../Styles/globalStyles';
import './SignUpStyles';

const SignUp = () => {
  //state
  const [formData, setFormData]= useState([{
    name: '',
    email: '',
    password: ''
  }]);

  //functions

  function handleChange(e){
    console.log(formData);
    setFormData( { ...formData, [e.target.name]: e.target.value} );
  }//end handleChange

  function handleSubmit(e){
    e.preventDefault();
    axios
    .get('')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }//end handleSubmit

  return (
    <div className= 'logInCont'>
      <Heading1>Sign UP</Heading1>

      <form onSubmit= {handleSubmit}>
      <label htmlFor= 'name' />
        <input
          onChange= {handleChange}
          value= {formData.name}
          id= 'nameInput'
          type='text'
          name='name'
          placeholder= 'Name'
        />
        <label htmlFor= 'email' />
        <input
          onChange= {handleChange}
          value= {formData.email}
          id= 'emailInput'
          type='email'
          name='email'
          placeholder= 'Email'
        />
        <label htmlFor= 'password' />
          <input
            onChange= {handleChange}
            value= {formData.password}
            id= 'passwordInput'
            type='password'
            name='password'
            placeholder= 'Password'
          />
        <button type= 'submit'>Submit</button>
      </form>
      <span>Already have an account? <Link to= 'login'>Log In</Link></span>
    </div>
  )
}

export default SignUp;