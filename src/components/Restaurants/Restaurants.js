import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

//components
import Menu from '../../Assets/images/Menu.png';
import LocationIcon from '../../Assets/images/Location.png';
import FavImg1 from '../../Assets/images/Best_Burger_Card.png';
import FavImg2 from '../../Assets/images/Best_Seafood_Card.png';
import FavImg3 from '../../Assets/images/Best_Sushi_Card.png';
import FavImg4 from '../../Assets/images/Best_Burger_Card.png';
import Rest1 from '../../Assets/images/rest_profile_card_elrin.png';
// import Rest2 from '../../Assets/images/rest_profile_card_ham.png';
// import Rest3 from '../../Assets/images/rest_profile_card_kin.png';
// import Rest4 from '../../Assets/images/rest_profile_card_ledip.png';
// import Rest5 from '../../Assets/images/rest_profile_card_liltav.png';
// import Rest6 from '../../Assets/images/rest_profile_card_may.png';
// import Rest7 from '../../Assets/images/rest_profile_card_oldebbitt.png';
// import Rest8 from '../../Assets/images/rest_profile_card_pom.png';
// import Rest9 from '../../Assets/images/rest_profile_card_salt.png';
// import Rest10 from '../../Assets/images/rest_profile_card_zay.png';

//styles
import { Heading4, SmallPara, ExtraSmallPara } from '../../Styles/globalStyles';
import {
  RestInfo,
  RestCard,
  SearchCont,
  RestaurantsHeader,
  FavoritesNav,
  FavoritesRow,
  FavDispCont,
  FavImgCont,
  RatingDisp
} from './RestaurantsStyles';

const Restaurants = () => {
  //state
  const [data, setData]= useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results= data.filter( ele => {
      return ele.city.toLowerCase().includes( searchTerm.toLowerCase() );
    } )
    setSearchResults( results );
  }, [searchTerm])

  useEffect(() => {
    axios
    .get('https://bw-restaurant-pass.herokuapp.com/api/cities/all/rests')
    .then(res => {
      // console.log(res.data);
      setData(res.data);
      setSearchResults(res.data);
    })
    .catch(err => {console.log(err);})
  }, [])

  //functions

  function handleChange(e) {
    // console.log(e.target.value);
    setSearchTerm(e.target.value);
  }//end func

  return (
    // main container for this entire section
    <div className='restaurantsCont'>

      <RestaurantsHeader className='restaurantsHeader'>
        <div className='currentLocationCont'>
          <SmallPara>
            <span>
              <img alt='location' src={LocationIcon} />
            </span>
            Washington, D.C.
          </SmallPara>
        </div> {/* end currentLocationCont */}

        <div className='menuButton'>
          <img alt=' nav button' src={Menu} />
        </div>
      </RestaurantsHeader> {/* end restaurantsHeader */}

      <SearchCont className='searchCont'>
        {/* filter/search box */}
        <input
          onChange={handleChange}
          value={searchTerm}
          type='text'
          name='search'
          id='search'
          placeholder='Enter Location'
        />
      </SearchCont> {/* end searchCont */}

      {/* favorites display center section */}
      <FavDispCont className='favoritesDisp'>

        <FavoritesNav className='favoritesNav'>
          <span><Heading4>Favorites</Heading4></span>
          <span><a href='#'><SmallPara>See All</SmallPara></a></span>

        </FavoritesNav> {/* end favoritesNav */}

        <FavoritesRow className='favoritesRow'>
          <FavImgCont className='favImgCont'>
            <img alt='favorite' src={FavImg1} />
          </FavImgCont> {/* end favImgCont */}
          <FavImgCont className='favImgCont'>
            <img alt='favorite' src={FavImg2} />
          </FavImgCont> {/* end favImgCont */}
          <FavImgCont className='favImgCont'>
            <img alt='favorite' src={FavImg3} />
          </FavImgCont> {/* end favImgCont */}
          <FavImgCont className='favImgCont'>
            <img alt='favorite' src={FavImg4} />
          </FavImgCont> {/* end favImgCont */}
          <FavImgCont className='favImgCont'>
            <img alt='favorite' src={FavImg1} />
          </FavImgCont> {/* end favImgCont */}
        </FavoritesRow> {/* end FavoritesRow */}
      </FavDispCont> {/* end favoritesDisp */}

      {/* main display for restaurant cards */}
    
      <div className='mainDispCont'>
        {/* display cards */}
        {
          
          searchResults.map( (ele, i) => {
            return(

              <Link key= {i} to='#'>
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
          </RestCard>
        </Link>

            )/**end return */
          })
        }

        
      </div> {/* end mainDispCont */}
    </div> // end restaurantsCont
  )
}

/**  restaurants info
 * id: 1,
  name: "Chicago Dog House",
  address: "816 W Fullerton Ave",
  city: "Chicago",
  zip: "60614",
  phone: "(773)248-3647",
  website: "chicagodoghouse.com",
  rating: 5,
  notes: "Great Chicago style hot dogs",
  stamped: 1,
  city_id: 1
 */

export default Restaurants;