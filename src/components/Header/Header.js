import React from 'react';
import {Link} from 'react-router-dom';

//components
import profileHeaderImg from '../../Assets/images/Burger_Icon.png';
import RightArrow from '../../Assets/images/chevron_right.png'
import ProfileBg from '../../Assets/images/Rest_Profile_img.png';
import ProfileBg2 from '../../Assets/images/Rest_Profile_img (1).png';

//styles
import {
  ProfileLogoImg, 
  ProfileLogoImgCont, 
  HeaderCont,
  ArrowImg,
  ProfileBgImg,
  ProfileBgImg2
} from './HeaderStyles';

const Header = () => {

  return (
    <HeaderCont className= 'headerCont'>
      <ProfileBgImg alt= 'background' src= {ProfileBg} />
      <ProfileBgImg2 alt= 'background' src= {ProfileBg2} />
      <div>
        <Link to= '/restaurants'>
          <ArrowImg alt= 'arrow' src= {RightArrow} />
        </Link>
      </div>

      <ProfileLogoImgCont className= 'profileHeaderImgCont'>
        <ProfileLogoImg src= {profileHeaderImg} />
      </ProfileLogoImgCont>

    </HeaderCont>
  )
}

export default Header;