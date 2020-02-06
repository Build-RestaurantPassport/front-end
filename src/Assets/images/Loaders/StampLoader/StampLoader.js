import React from 'react';
import {Tween} from 'react-gsap';

//components
import Loader from '../../../images/passport_stamp.png';

//styles
import {Spinner, SpinnerCont} from './StampLoaderStyles';

const StampLoader = () => {
  return (
    
    <SpinnerCont className= 'spinnerCont'>
      <Tween to= {{ease: 'linear', duration: '5', rotation: '+=360', transformOrigin: '50% 50%', repeat: -1 }}>
          <Spinner alt= 'Loader' src= {Loader} />
      </Tween>
      <Tween to= { { duration: 2, ease: 'slow', opacity: 0, repeat: -1  } }>
        <p>Fetching Restaurants...</p>
      </Tween>
    </SpinnerCont>
  )
}

export default StampLoader;