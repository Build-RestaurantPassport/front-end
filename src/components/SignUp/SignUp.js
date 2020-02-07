import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from '../../axiosWithAuth';
import * as Yup from 'yup';
import {Form, withFormik, Field} from 'formik';

//components
import LeftArrow from '../../Assets/images/Chevron_Left.png';

//styles
import {Heading1} from '../../Styles/globalStyles';
import {FormHeader, SignUpCont, SubmitButton, BottomFormInfo, FormArrowImg} from './SignUpStyles';

const SignUp = ({values, errors, touched, status}) => {
    
  const token = localStorage.getItem('token');

  //state
  const [formData, setFormData]= useState([{
    username: '',
    email: '',
    password: ''
  }]);

  //functions
  useEffect(() => {
  console.log('status has changed');
  //this may be temporary code below, not sure... waiting on React 2

  console.log('bbbbbbbbbbb: ' + formData.username);

  //updata form data from status
  status && setFormData( formData => [...formData, status] );

  }, [status]);

  return (
    <SignUpCont className= 'logInCont'>
      <FormHeader className= 'signUpHeader'>
        <div><Link to= '/'><FormArrowImg alt= 'arrow-left' src= {LeftArrow} /></Link></div>
        <Heading1>Sign UP</Heading1>
      </FormHeader>
      <Form>
      <div className= 'errorCont'>
        <label htmlFor= 'userName'>User Name</label><br />
          <Field
            id= 'nameInput'
            type='text'
            name='userName'
            placeholder= 'User Name'
          />
          { touched.userName && errors.userName && ( <p className= 'error'>{errors.userName}</p> ) }
      </div>
        <div className= 'errorCont'>
          <label htmlFor= 'email'>Email</label> <br />
          <Field
            id= 'emailInput'
            type='email'
            name='email'
            placeholder= 'Email'
          />
          { touched.email && errors.email && ( <p className= 'error'>{errors.email}</p> ) }
        </div>
        <div className= 'errorCont'>
          <label htmlFor= 'password'>Password</label> <br />
            <Field
              id= 'passwordInput'
              type='password'
              name='password'
              placeholder= 'Password'
            />
            { touched.password && errors.password && ( <p className= 'error'>{errors.password}</p> ) }
        </div>
        <SubmitButton type= 'submit'>Sign Up</SubmitButton>
      </Form>

      <BottomFormInfo>Already have an account? <Link to= 'login'>Log In</Link></BottomFormInfo>
      {/* temporary link to get into site until signUp/logIn gets hooked up */}
      <Link to= '/profile'>To Profile></Link>
    </SignUpCont>
  )
}


const formikSignUp= withFormik( {
  mapPropsToValues({userName, email, password}){
    return{
      userName: userName || '',
      email: email || '',
      password: password || ''
    }//end return
  },// end mapPropsToValues

  //validation
  validationSchema: Yup.object().shape( {
    userName: Yup.string().min(3).max(25).required('Name is required.'),
    email: Yup.string().min(12).max(30).required('Email is required.'),
    password: Yup.string().min(7).max(15).required('Password is required.')
  } ),//end validationSchema

  handleSubmit(values, {resetForm, setStatus}){

    console.log('aaaaaaaaaaaaaaaaaaaaaaaaa');

    console.log(values);

    axios().post('https://bw-restaurant-pass.herokuapp.com/api/auth/register', 
    {
      "username": values.name,
      "password": values.password,
      "name": values.name,
      "city": "test",
      "email": values.email
    }).then(res => {

      console.log(res);

      window.location = '/login';

    }).catch(err => console.log(err));
  
  // temporary code below waiting on React 2 to do his thing here. delete setStatus and resetForm below when ready
    setStatus(values);
    resetForm();
  }//end handleSubmit
} )(SignUp)

export default formikSignUp;