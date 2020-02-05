import React, { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from '../../axiosWithAuth';

//components

//styles
import {Heading1} from '../../Styles/globalStyles';
import './LogInStyles';

const LogIn = ( {values, errors, touched, status} ) => {
  //state
  const [formData, setFormData] = useState([
    {
      username: '',
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
        <label htmlFor= 'email' />
        <Field
          id= 'emailInput'
          type='email'
          name='email'
          placeholder= 'Email'
        />
        <label htmlFor= 'password' />
          <Field
            id= 'passwordInput'
            type='password'
            name='password'
            placeholder= 'Password'
          />
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

})(LogIn)
export default formikLogIn;