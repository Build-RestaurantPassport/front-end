import React from 'react';
import {Link} from 'react-router-dom';

//componenets

//styles
import {fontStyles} from '../../Styles/styleVars';
import {Para, Anchor, Heading1} from '../../Styles/globalStyles';
import './EntryStyles';

const Entry = () => {
  return (
    <div className= 'entryPoint'>
      <Heading1>TT Logo.. Table Tours</Heading1>
      <Para>Log In/Sign Up </Para>
      <Anchor><Link to= '/login'>Log In</Link></Anchor>
      <Anchor><Link to= '/signup'>Sign Up</Link></Anchor>
    </div>
  )
}

export default Entry;
