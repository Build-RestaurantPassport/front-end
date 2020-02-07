import React, { useEffect, useState } from 'react';
import {NavLink, Route} from 'react-router-dom';

//components
import Header from '../Header/Header';
// import AddPhotos from './AddPhotos/AddPhotos';
import AddReviews from './AddReviews/AddReviews';

//styles
import '../../Styles/globalStyles';
import './ProfileStyles';
// import axios from '../../axiosWithAuth';
import {Heading3} from '../../Styles/globalStyles';
import {
  ProfileLower, 
  ProfileButton, 
  ButtonRow, 
  ProfileCont, 
  ProfileMid,
  ProfileNav,
  ProfileDynamic
} from './ProfileStyles';

const Profile = () => {

  useEffect(() => {

    

  });

  return (
    <ProfileCont className='profileCont'>
      <Header />
      <ProfileMid className='profileMid'>

        <Heading3>Rebecca Spedding</Heading3>
        <p className='followersDisp'>
          <span>312</span> Followers | <span>220</span> Following
        </p>
        <ButtonRow className='buttonRow'>
          <ProfileButton>Add Reviews</ProfileButton>
          <ProfileButton>Add Photos</ProfileButton>
          <ProfileButton>Edit Profile</ProfileButton>
        </ButtonRow>
      </ProfileMid>

      <ProfileLower className='profileLower'>
        <ProfileNav>
          <ul>
            <li>
              {/* <NavLink to= '/profile/addreviews'>Reviews</NavLink> */}
              <NavLink to= '/profile'>Reviews</NavLink>
              </li>
            <li>
              <NavLink to= '/profile'>photos</NavLink>
            </li>
          </ul>
        </ProfileNav>
        <ProfileDynamic className= 'profileDynamic'>

            <AddReviews />
          
            {/* <AddPhotos /> */}
        </ProfileDynamic>

      </ProfileLower>
      
    </ProfileCont>
  )
}

export default Profile;