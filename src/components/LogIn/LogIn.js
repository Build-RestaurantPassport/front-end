import React from 'react';
import {Link} from 'react-router-dom';

//components

//styles
import {Para, Anchor} from '../../Styles/globalStyles';
import './LogInStyles';

const LogIn = () => {
  return (
    <div>
      <Para>Log In Form</Para>
      <Anchor>
        <Link to= '#'>Submit</Link>
      </Anchor>
    </div>
  )
}

export default LogIn;