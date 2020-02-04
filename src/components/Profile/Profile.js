import React from 'react';
// import {Link} from 'react-router-dom';

//components
import Header from '../Header/Header';
import ReviewCardDefault from '../../Assets/images/review_card.png';
//styles
import {Para} from '../../Styles/globalStyles';
import './ProfileStyles';

const Profile = () => {
  return (
    <div className= 'headerCont'>
      <Header />
      <div className= 'profileMid'>
        <h3>Edit Profile</h3>
        <p className= 'followersDisp'>
          <span>0</span> Followers | <span>0</span> Following
        </p>
        <div className= 'buttonRow'>
          <button>Add Reviews</button>
          <button>Add Photos</button>
          <button>Edit Profile</button>
        </div>
      </div>  
      <div className= 'profileLower'>
        <nav>
          <ul>
            <li><a href= '#'>Reviews</a></li>
            <li><a href= '#'>photos</a></li>
          </ul>
        </nav>
        <img src= {ReviewCardDefault} />
        <p>You haven't written any reviews yet.</p>
        <a href= '#'>Add Reviews</a>
      </div>
    </div> 
  )
}

export default Profile;