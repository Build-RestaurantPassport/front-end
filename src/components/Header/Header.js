import React from 'react';
import {Link} from 'react-router-dom';

//components
import profileHeaderImg from '../../Assets/images/Burger_Icon.png';
import RightArrow from '../../Assets/images/chevron_right.png'

//styles
import {
  ProfileLogoImg, 
  ProfileLogoImgCont, 
  HeaderCont,
  ArrowImg
} from './HeaderStyles';

const Header = () => {

  return (
    <HeaderCont className= 'headerCont'>

      <div>
        <Link to= 'restaurants'>
          <ArrowImg alt= 'arrow' src= {RightArrow} />
        </Link>
      </div>

      <h3>Edit Profile Cover</h3>

      <ProfileLogoImgCont className= 'profileHeaderImgCont'>
        <ProfileLogoImg src= {profileHeaderImg} />
      </ProfileLogoImgCont>

    </HeaderCont>
  )
}

export default Header;