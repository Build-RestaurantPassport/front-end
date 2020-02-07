import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from '../../axiosWithAuth';

//components

//styles
import {Heading1} from '../../Styles/globalStyles';
import './LogInStyles';

const LogIn = () => {
  //state
  const [formData, setFormData] = useState([
    {
      username: '',
      password: ''
    }
  ]);

  //functions

  function handleChange(e){
    setFormData( {...formData, [e.target.name]: e.target.value} );
  }//end handleChange

  function handleSubmit(e){
    e.preventDefault();
    axios().post('https://bw-restaurant-pass.herokuapp.com/api/auth/login', {

      username: formData.username,
      password: formData.password

    }).then(res => {

      console.log(res);

      if (res.status == 200) {

        localStorage.setItem('token', res.data.token);
        window.location = '/profile';

      }

    }).catch(err => console.log(err));
  }//end handleSubmit
  console.log(formData);  
  return (
    <div className= 'logInCont'>
      <Heading1>Log In</Heading1>

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
        <label htmlFor= 'password'>
          <input
            onChange= {handleChange}
            value= {formData.password}
            id= 'passwordInput'
            type='password'
            name='password'
            placeholder= 'Password'
          />
        </label>
        <button type= 'submit'>Submit</button>
      </form>

      <span>Don't have an account? <Link to= 'signup'>Sign-Up</Link></span>
    </div>
  )
}

export default LogIn;