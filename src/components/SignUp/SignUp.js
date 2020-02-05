import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from '../../axiosWithAuth';

//components

//styles
import {Heading1} from '../../Styles/globalStyles';
import './SignUpStyles';

const SignUp = () => {
  //state
  const [formData, setFormData]= useState([{
    username: '',
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
    .get('', {

      

    }).then(res => {



    }).catch(err => console.log(err))
  }//end handleSubmit

  return (
    <div className= 'logInCont'>
      <Heading1>Sign UP</Heading1>

      <form onSubmit= {handleSubmit}>
      <label htmlFor= 'username' />
        <input
          onChange= {handleChange}
          value= {formData.username}
          id= 'usernameInput'
          type='text'
          name='username'
          placeholder= 'Username'
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