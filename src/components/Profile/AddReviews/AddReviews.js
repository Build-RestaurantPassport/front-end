import React from 'react';

//components
import ReviewCardIcon from '../../../Assets/images/review_card.png';

//styles
import './AddReviewsStyles';

const AddReviews = () => {
  return (
    <div className= 'addReviews'>
      <img src={ReviewCardIcon} />
      <p>You haven't written any reviews yet.</p>
      <a href='#'>Add Reviews</a>
    </div>
  )
}

export default AddReviews;
