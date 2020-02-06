import React from 'react';

//styles
import { Heading4, SmallPara, ExtraSmallPara } from '../../../Styles/globalStyles';
import {
  RestInfo,
  RestCard,
  RatingDisp,
} from './RestCardStyles';

const RestCardDisp = ({data}) => {
  return (
    <RestCard className='card'>
      <img alt='restaurant' src={data.image} />
      <RestInfo className='restInfo'>
        <Heading4>{data.name}</Heading4>
        <ExtraSmallPara>
          {data.notes}
        </ExtraSmallPara>
        <ExtraSmallPara>
          {data.city}
        </ExtraSmallPara>
        <ExtraSmallPara>
          {data.website}
        </ExtraSmallPara>
      </RestInfo>
      <RatingDisp className='ratingDisp'>
        {data.rating}
      </RatingDisp>
    </RestCard>
  )
}

export default RestCardDisp;
