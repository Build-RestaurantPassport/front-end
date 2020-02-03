import React from 'react';
import {Link} from 'react-router-dom';

//components
import profileHeaderImg from '../../Assets/images/Burger_Icon.png';
import RightArrow from '../../Assets/images/chevron_right.png'
//styles
import {ProfileLogoImg, ProfileLogoImgCont} from './HeaderStyles';
const Header = () => {
  return (
    <div className= 'headerCont'>
      <Link to= 'localrestaurants'><img src= {RightArrow} /></Link>
      <a href= '#'>Edit Profile Cover</a>
      <ProfileLogoImgCont className= 'profileHeaderImgCont'>
        <ProfileLogoImg src= {profileHeaderImg} />
      </ProfileLogoImgCont>
    </div>
  )
}

export default Header;