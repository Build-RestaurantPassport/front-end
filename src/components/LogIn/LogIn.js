import React from 'react';
import {Link} from 'react-router-dom';

//components

//styles
import {Para} from '../../Styles/globalStyles';
import './LogInStyles';

const LogIn = () => {
  return (
    <div>
      <Para>Log In Form</Para>
      <Link to= '#'>Submit(to app main display)</Link>
    </div>
  )
}

export default LogIn;