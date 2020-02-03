import React from 'react';
import {Link} from 'react-router-dom';

//componenets
import LandingPageImg from '../../Assets/images/Landing_Page_img.png';
import Logo from '../../Assets/images/TT_Landing_Page_Logo.png';

//styles
import {fontStyles} from '../../Styles/styleVars';
import {Para, Anchor, Heading1} from '../../Styles/globalStyles';
import {ImgGroup} from './EntryStyles';

const Entry = () => {
  return (
    <div className= 'entryPoint'>
      <ImgGroup className= 'imgGroup'>
        <img id= 'logo' src= {Logo} />
        <img src= {LandingPageImg} />
      </ImgGroup>
      <Anchor><Link to= '/login'>Log In</Link></Anchor>
      <Anchor><Link to= '/signup'>Sign Up</Link></Anchor>
    </div>
  )
}

export default Entry;
