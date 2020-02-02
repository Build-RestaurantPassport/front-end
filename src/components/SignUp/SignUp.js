import React from 'react';
import {Link} from 'react-router-dom';

//styles
import {Para} from '../../Styles/globalStyles';
import './SignUpStyles';

const SignUp = () => {
  return (
    <div>
      <Para>Sign Up Form</Para>
      <Link to= '/profile'>Submit</Link>
    </div>
  )
}

export default SignUp;