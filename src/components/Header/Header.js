import React from 'react';

//components
import profileHeaderImg from '../../Assets/images/Burger_Icon.png';

//styles
import {ProfileLogoImg, ProfileLogoImgCont} from './HeaderStyles';
const Header = () => {
  return (
    <div className= 'headerCont'>
      <a href= '#'>Edit Profile Cover</a>
      <ProfileLogoImgCont className= 'profileHeaderImgCont'>
        <ProfileLogoImg src= {profileHeaderImg} />
      </ProfileLogoImgCont>
    </div>
  )
}

export default Header;