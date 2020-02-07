import React from 'react';
import { Route } from 'react-router-dom';
//components
import Entry from './components/Entry/Entry';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import Restaurants from './components/Restaurants/Restaurants';

import PrivateRoute from './components/PrivateRoute';

//styles
import './Styles/styleVars';
import { GlobalStyle, AppCont } from './Styles/globalStyles';

function App() {
  return (
    // AppCont is a default styled-component I made. just some default basics to help us get started. we can change and tweak later as needed.
    <AppCont className="App">
      <GlobalStyle />  {/**contains body reset stuff, box-sizing etc..  */}

      <Route exact path='/'>
        <LogIn />
      </Route>

      <Route path='/login'>
        <LogIn />
      </Route>

      <Route exact path='/signup'>
        <SignUp />
      </Route>

      <PrivateRoute exact path='/profile'>
        <Profile />
      </PrivateRoute>

      <PrivateRoute exact path='/restaurants'>
        <Restaurants />
      </PrivateRoute>

    </AppCont>
  );
}

export default App;
