import React from 'react';

//components
import ReviewCardIcon from '../../../Assets/images/review_card.png';

//styles
import {Para} from '../../../Styles/globalStyles';
import {AddReviewsCont} from './AddReviewsStyles';

const AddReviews = () => {
  return (
    <AddReviewsCont className= 'addReviews'>
      <img src={ReviewCardIcon} />
      <Para>You haven't written any reviews yet.</Para>
      <a href='#'>Add Reviews</a>
    </AddReviewsCont>
  )
}

export default AddReviews;
