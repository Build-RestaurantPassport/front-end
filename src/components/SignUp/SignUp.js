import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import {Form, withFormik, Field} from 'formik';

//components

//styles
import {Heading1} from '../../Styles/globalStyles';
import './SignUpStyles';

const SignUp = ({values, errors, touched, status}) => {
  //state
  const [formData, setFormData]= useState([{
    name: '',
    email: '',
    password: ''
  }]);

  //functions
  useEffect(() => {
  console.log('status has changed');
  //this may be temporary code below, not sure... waiting on React 2

  //updata form data from status
  status && setFormData( formData => [...formData, status] );


  }, [status])

  return (
    <div className= 'logInCont'>
      <Heading1>Sign UP</Heading1>

      <Form>
      <div>
        <label htmlFor= 'name' />
          <Field
            id= 'nameInput'
            type='text'
            name='name'
            placeholder= 'Name'
          />
          { touched.name && errors.name && ( <p className= 'error'>{errors.name}</p> ) }
      </div>
        <div>
          <label htmlFor= 'email' />
          <Field
            id= 'emailInput'
            type='email'
            name='email'
            placeholder= 'Email'
          />
          { touched.email && errors.email && ( <p className= 'error'>{errors.email}</p> ) }
        </div>
        <div>
          <label htmlFor= 'password' />
            <Field
              id= 'passwordInput'
              type='password'
              name='password'
              placeholder= 'Password'
            />
            { touched.password && errors.password && ( <p className= 'error'>{errors.password}</p> ) }
        </div>
        <button type= 'submit'>Submit</button>
      </Form>

      <span>Already have an account? <Link to= 'login'>Log In</Link></span>
    </div>
  )
}


const formikSignUp= withFormik( {
  mapPropsToValues({name, email, password}){
    return{
      name: name || '',
      email: email || '',
      password: password || ''
    }//end return
  },// end mapPropsToValues

  //validation
  validationSchema: Yup.object().shape( {
    name: Yup.string().min(3).max(25).required('Name is required.'),
    email: Yup.string().min(12).max(30).required('Email is required.'),
    password: Yup.string().min(7).max(15).required('Password is required.')
  } ),//end validationSchema

  handleSubmit(values, {resetForm, setStatus}){
  //   //un-comment when you need it.. 
  //   axios
  //   .get()
  //   .then(res => {
  //     console.log('Success!', res);
  //     setStatus(res.data);
  //     resetForm();
  //   })
  //   .catch(err => {console.log(err.response);})
  
  // temporary code below waiting on React 2 to do his thing here. delete setStatus and resetForm below when ready
    setStatus(values);
    resetForm();
  }//end handleSubmit
} )(SignUp)

export default formikSignUp;