import React from 'react';

//components
import PhotoIcon from '../../../Assets/images/Photo_Icon.png';

//styles
import './AddPhotosStyles';

const AddPhotos = () => {
  return (
    <div className= 'addPhotos'>
      <img alt= 'icon' src={PhotoIcon} />
      <p>You haven't uploaded photos yet.</p>
      <button>Add Photo</button>
    </div>
  )
}

export default AddPhotos;
