import React from 'react';
import { Route } from 'react-router-dom';
//components
import Entry from './components/Entry/Entry';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import Restaurants from './components/Restaurants/Restaurants';

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

      <Route exact path='/profile'>
        <Profile />
      </Route>

      <Route exact path='/restaurants'>
        <Restaurants />
      </Route>

    </AppCont>
  );
}

export default App;
