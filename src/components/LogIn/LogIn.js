import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import {Link} from 'react-router-dom';

//components


//styles
import {Heading1} from '../../Styles/globalStyles';
import './LogInStyles';

const LogIn = ({ values, status, errors, touched }) => {
  //state
  const [formData, setFormData] = useState([]);

  //functions
  useEffect(() => {
    console.log(status);
    status && setFormData( formData => [ ...formData, status ] );

  }, [status])

  return (
    <div>
      <Heading1>Log In</Heading1>

      <Form>

        <label htmlFor= 'email' />
        <Field
          id= 'emailInput'
          type='email'
          name='email'
          placeholder= 'Email'
        />
        <label htmlFor= 'password'>
          <Field
            id= 'passwordInput'
            type='password'
            name='password'
            placeholder= 'Password'
          />
        </label>
        <button type= 'submit'>Submit</button>
      </Form>
      <span>Don't have an account? <Link to= 'signup'>Sign-Up</Link></span>
    </div>
  )
}

const formikLogIn = withFormik({
  mapPropsToValues(props) {
    return {
      email: props.email || '',
      password: props.password || ''
    }//end return
  },//end mapPropsToValues
  handleSubmit(values, { setStatus, resetForm }) {
    setStatus(values);
    resetForm();
  }//end handleSubmit
})(LogIn)
export default formikLogIn;