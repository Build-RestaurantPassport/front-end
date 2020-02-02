import React from 'react';
import {Link} from 'react-router-dom';

//componenets

//styles
import {Para, Button} from '../../Styles/globalStyles';
import './EntryStyles';

const Entry = () => {
  return (
    <div className= 'entryPoint'>
      <Para>LogIn/SignIn forms go here</Para>
      <Link to= '/login'>Log In</Link>
      <Link to= '/signup'>Sign Up</Link>
    </div>
  )
}

export default Entry;
