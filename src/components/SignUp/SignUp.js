import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {withFormik, Form, Field} from 'formik';
import axios from 'axios';

//components

//styles
import {Heading1} from '../../Styles/globalStyles';
import './SignUpStyles';

const SignUp = ({ values, status, errors, touched }) => {
  //state
  const [formData, setFormData]= useState([]);

  //functions
  useEffect(() => {
    console.log(status);
    status && setFormData( formData => [ ...formData, status ] );

  }, [status])

  return (
    <div className= 'logInCont'>
      <Heading1>Sign UP</Heading1>

      <Form>
      <label htmlFor= 'name' />
        <Field
          id= 'nameInput'
          type='text'
          name='name'
          placeholder= 'Name'
        />
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
      <span>Already have an account? <Link to= 'login'>Log In</Link></span>
    </div>
  )
}

const formikSignUp= withFormik( {
  mapPropsToValues(props){
    return{
      name: props.name || '',
      email: props.email || '',
      password: props.password || ''
    }//end return
  },//end mapPropsToValues
  handleSubmit(values, { setStatus, resetForm }){
    //axios here
    setStatus(values);
    resetForm();
  }// end handleSubmit
} )(SignUp);
export default formikSignUp;