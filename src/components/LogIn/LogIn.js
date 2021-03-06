import React, { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from '../../axiosWithAuth';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

//components
import LeftArrow from '../../Assets/images/Chevron_Left.png';

//styles
import {Heading1} from '../../Styles/globalStyles';
import {FormHeader, LogInCont, SubmitButton, BottomFormInfo, FormArrowImg} from './LogInStyles';

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
    }, [status]);
  
  return (
    <LogInCont className= 'logInCont'>
      <FormHeader className= 'LogInHeader'>
        <div><Link to= '/'><FormArrowImg alt= 'arrow-left' src= {LeftArrow} /></Link></div>
        <Heading1>Log In</Heading1>
      </FormHeader>
      <Form>
        <div className= 'errorCont'>
          <label htmlFor= 'username'>Username</label><br />
          <Field
            id= 'usernameInput'
            type='username'
            name='username'
            placeholder= 'Username'
          />
          { touched.username && errors.username && ( <p className= 'error'>{errors.username}</p> ) }
        </div>
        <div className= 'errorCont'>
          <label htmlFor= 'password'>Password</label><br />
            <Field
              id= 'passwordInput'
              type='password'
              name='password'
              placeholder= 'Password'
            />
            { touched.password && errors.password && ( <p className= 'error'>{errors.password}</p> ) }
        </div>
        <SubmitButton type= 'submit'>Log In</SubmitButton>
      </Form>

      <BottomFormInfo className= 'bottomFormInfo'>Don't have an account? <Link to= 'signup'>Sign-Up</Link></BottomFormInfo>
      {/* temporary link to get into site until signUp/logIn gets hooked up */}
      <Link to= '/profile'>To Profile></Link>
    </LogInCont>
  )
}
const formikLogIn= withFormik({

  mapPropsToValues({username, password}){
    return{
      username: username || '',
      password: password || ''
    }//end return
  },// end mapPropsToValues

  //validation
  validationSchema: Yup.object().shape( {
    username: Yup.string().min(5).max(30).required('Username is required.'),
    password: Yup.string().min(7).max(15).required('Password is required.')
  } ),//end validationSchema

  handleSubmit(values, {resetForm, setStatus}){
    axios().post('https://bw-restaurant-pass.herokuapp.com/api/auth/login', {

      username: values.username,
      password: values.password

    }).then(res => {

      console.log(res);

      if (res.status == 200) {

        localStorage.setItem('token', res.data.token);
        window.location = '/profile';

      }

    }).catch(err => console.log(err));
      setStatus(values);
      resetForm();
    }//end handleSubmit


})(LogIn)
export default formikLogIn;