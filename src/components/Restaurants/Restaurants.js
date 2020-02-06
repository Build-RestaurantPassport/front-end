import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

//components
import Menu from '../../Assets/images/Menu.png';
import LocationIcon from '../../Assets/images/Location.png';
import StampLoader from '../StampLoader/StampLoader';
import RestCardDisp from './RestCard/RestCard';

//images
import FavImg1 from '../../Assets/images/Best_Burger_Card.png';
import FavImg2 from '../../Assets/images/Best_Seafood_Card.png';
import FavImg3 from '../../Assets/images/Best_Sushi_Card.png';
import FavImg4 from '../../Assets/images/Best_Burger_Card.png';
import Rest1 from '../../Assets/images/rest_profile_card_elrin.png';

//styles
import { Heading4, SmallPara, ExtraSmallPara } from '../../Styles/globalStyles';
import {
  SearchCont,
  RestaurantsHeader,
  FavoritesNav,
  FavoritesRow,
  FavDispCont,
  FavImgCont,
  MainDispCont
} from './RestaurantsStyles';

const Restaurants = () => {
  //state
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  //get search filter results
  useEffect(() => {
    const results = data.filter(ele => {
      return ele.city.toLowerCase().includes(searchTerm.toLowerCase());
    })
    setSearchResults(results);
  }, [searchTerm])

  //initial API call
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://bw-restaurant-pass.herokuapp.com/api/cities/all/rests')
      .then(res => {
        // console.log(res.data);
        let timeout = window.setTimeout(() => {
          setData(res.data);
          setSearchResults(res.data);
          setLoading(false);
        }, 1000);
      })
      .catch(err => { console.log(err); })
  }, [])

  //functions
  //handleChange for search/filter input
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

      <MainDispCont className='mainDispCont'>
        {/* display cards */}

        {/* conditional render of loader image */}
        {loading === true ? <StampLoader /> :
            searchResults.map((ele, i) => {
              return (
                //card component
                <Link key={i} to='#'>
                  <RestCardDisp data= {ele}/>
                </Link>
              )/**end return */
            })
        }
      </MainDispCont> {/* end mainDispCont */}
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