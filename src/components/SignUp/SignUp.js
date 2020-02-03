import React from 'react';
import {Link} from 'react-router-dom';

//styles
import {Para, Anchor} from '../../Styles/globalStyles';
import './SignUpStyles';

const SignUp = () => {
  return (
    <div>
      <Para>Sign Up Form</Para>
      <Anchor>
        <Link to= '/profile'>Submit</Link>
      </Anchor>
    </div>
  )
}

export default SignUp;