import React from 'react';
import {NavLink, Route} from 'react-router-dom';

//components
import Header from '../Header/Header';
import AddPhotos from './AddPhotos/AddPhotos';
import AddReviews from './AddReviews/AddReviews';

//styles
import { Para } from '../../Styles/globalStyles';
import {
  ProfileLower, 
  ProfileButton, 
  ButtonRow, 
  ProfileCont, 
  ProfileMid,
  ProfileNav
} from './ProfileStyles';

const Profile = () => {
  return (
    <ProfileCont className='profileCont'>
      <Header />
      <ProfileMid className='profileMid'>
        <h3>Edit Profile - or - Add Photos (<i>dynamic</i>)</h3>
        <p className='followersDisp'>
          <span>0</span> Followers | <span>0</span> Following
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
              <NavLink to= '/profile/addreviews'>Reviews</NavLink>
              </li>
            <li>
              <NavLink to= '/profile/addphotos'>photos</NavLink>
            </li>
          </ul>
        </ProfileNav>
        <div className= 'profileDynamic'>
          <Route path= '/profile/:addreviews'>
            <AddReviews />
          </Route>

          <Route path= '/profile/:addphotos'>
            <AddPhotos />
          </Route>
        </div>

      </ProfileLower>
    </ProfileCont>
  )
}

export default Profile;