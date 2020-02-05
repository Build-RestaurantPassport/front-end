import React, { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from '../../axiosWithAuth';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

//components

//styles
import {Heading1} from '../../Styles/globalStyles';
import './LogInStyles';

const LogIn = ( {values, errors, touched, status} ) => {
  //state
  const [formData, setFormData] = useState([
    {
      email: '',
      password: ''
    }
  ]);

  //functions
  useEffect(() => {
    console.log('status has changed');
    //this may be temporary code below, not sure... waiting on React 2
  
    //updata form data from status
    status && setFormData( formData => [...formData, status] );
    }, [status])


  return (
    <div className= 'logInCont'>
      <Heading1>Log In</Heading1>

      <Form>
        <div className= 'errorCont'>
          <label htmlFor= 'email' />
          <Field
            id= 'emailInput'
            type='email'
            name='email'
            placeholder= 'Email'
          />
          { touched.email && errors.email && ( <p className= 'error'>{errors.email}</p> ) }
        </div>
        <div className= 'errorCont'>
          <label htmlFor= 'password' />
            <Field
              id= 'passwordInput'
              type='password'
              name='password'
              placeholder= 'Password'
            />
            { touched.password && errors.password && ( <p className= 'error'>{errors.password}</p> ) }
        </div>
        <button type= 'submit'>Log In</button>
      </Form>

      <span>Don't have an account? <Link to= 'signup'>Sign-Up</Link></span>
    </div>
  )
}
const formikLogIn= withFormik({

  mapPropsToValues({email, password}){
    return{
      email: email || '',
      password: password || ''
    }//end return
  },// end mapPropsToValues

  //validation
  validationSchema: Yup.object().shape( {
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


})(LogIn)
export default formikLogIn;