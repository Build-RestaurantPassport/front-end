import React, {useEffect, useContext} from 'react';
import RestaurantsContext from '../../../contexts/RestaurantsContext';

//styles
import { Heading4, ExtraSmallPara } from '../../../Styles/globalStyles';
import {
  RestInfo,
  RestCard,
  RatingDisp,
} from './RestCardDispStyles';

import axios from '../../../axiosWithAuth';

const RestCardDisp = () => {

  const {ele, Rest1} = useContext(RestaurantsContext);

  useEffect(() => {
  
    console.log(ele);
  
  });

  const edit = () => {

    axios().put('https://bw-restaurant-pass.herokuapp.com/api/cities/restaurants/' + ele.id, {

      "name": "Aaaaaa: " + ele.id

    }).then(res => {

      console.log(res);
      window.location.reload(false);

    }).catch(err => console.log(err));

  }

  const del = () => {

    axios().delete('https://bw-restaurant-pass.herokuapp.com/api/cities/restaurants/' + ele.id).then(res => {

      console.log(res);
      window.location.reload(false);

    }).catch(err => console.log(err));
    
  }
  
  return (
    <RestCard className='card'>
      <img alt='restaurant' src={Rest1} />
      <RestInfo className='restInfo'>
        <Heading4>{ele.name}</Heading4>
        <ExtraSmallPara>
          {ele.notes}
        </ExtraSmallPara>
        <ExtraSmallPara>
          {ele.city}
        </ExtraSmallPara>
        <ExtraSmallPara>
          {ele.website}
        </ExtraSmallPara>
      </RestInfo>
      <RatingDisp className='ratingDisp'>
        {ele.rating}
      </RatingDisp>
      <button onClick={() => edit()}>Edit</button>
      <button onClick={() => del()}>Delete</button>
    </RestCard>
  )
}

export default RestCardDisp;
