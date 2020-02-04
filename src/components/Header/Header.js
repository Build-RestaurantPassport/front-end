import React from 'react';
import {Link} from 'react-router-dom';

//components
import profileHeaderImg from '../../Assets/images/Burger_Icon.png';
import RightArrow from '../../Assets/images/chevron_right.png'
import ProfileBg from '../../Assets/images/Rest_Profile_img.png';

//styles
import {
  ProfileLogoImg, 
  ProfileLogoImgCont, 
  HeaderCont,
  ArrowImg,
  ProfileBgImg
} from './HeaderStyles';

const Header = () => {

  return (
    <HeaderCont className= 'headerCont'>
      <ProfileBgImg alt= 'background' src= {ProfileBg} />
      <div>
        <Link to= 'restaurants'>
          <ArrowImg alt= 'arrow' src= {RightArrow} />
        </Link>
      </div>

      {/* <h3>Edit Profile Cover</h3> */}

      <ProfileLogoImgCont className= 'profileHeaderImgCont'>
        <ProfileLogoImg src= {profileHeaderImg} />
      </ProfileLogoImgCont>

    </HeaderCont>
  )
}

export default Header;