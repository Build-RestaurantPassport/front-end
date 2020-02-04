import React from 'react';

//components
import PhotoIcon from '../../../Assets/images/Photo_Icon.png';

//styles
import './AddPhotosStyles';

const AddPhotos = () => {
  return (
    <div className= 'addPhotos'>
      <img src={PhotoIcon} />
      <p>You haven't uploaded photos yet.</p>
      <a href='#'>Add Photo</a>
    </div>
  )
}

export default AddPhotos;
