import React, {useState} from 'react';

//components
import Menu from '../../Assets/images/Menu.png';
import LocationIcon from '../../Assets/images/Location.png';
import FavImg1 from '../../Assets/images/Best_Burger_Card.png';

//styles
import {Para} from '../../Styles/globalStyles';
import {FavoritesRow, FavDispCont, FavImgCont} from './RestaurantsStyles';

const Restaurants = () => {
  //state
  const [searchTerm, setSearchTerm]= useState('');

  //functions
  function handleChange(e){
    console.log(e.target.value);
    setSearchTerm( e.target.value );
  }//end func

  return (
    // main container for this entire section
    <div className= 'restaurantsCont'>

      <div className= 'restaurantsHeader'>
        <div className= 'currentLocationCont'>
          <Para>
            <span>
              <img alt= 'location' src= {LocationIcon} />
            </span>
            Washington, D.C.
          </Para>
        </div> {/* end currentLocationCont */}

        <div className= 'menuButton'>
          <img alt=' nav button' src= {Menu}/>
        </div> 
      </div> {/* end restaurantsHeader */}

      <div className= 'searchCont'>
          {/* filter/search box */}
          <input 
          onChange= {handleChange}
          value= {searchTerm}
          type= 'text' 
          name= 'search'
          id= 'search'
          placeholder= 'Enter Location'
          />
        </div> {/* end searchCont */}
    
      {/* favorites display center section */}
      <FavDispCont className= 'favoritesDisp'>
        <div className= 'favoritesNav'>
          <span>Favorites</span> 
          <span><a href= '#'>See All</a></span>
        </div> {/* end favoritesNav */}

        <FavoritesRow className= 'favoritesRow'>
          <FavImgCont className= 'favImgCont'>
            <img alt= 'favorite' src= {FavImg1} />
          </FavImgCont> {/* end favImgCont */}
          <FavImgCont className= 'favImgCont'>
            <img alt= 'favorite' src= {FavImg1} />
          </FavImgCont> {/* end favImgCont */}
          <FavImgCont className= 'favImgCont'>
            <img alt= 'favorite' src= {FavImg1} />
          </FavImgCont> {/* end favImgCont */}
          <FavImgCont className= 'favImgCont'>
            <img alt= 'favorite' src= {FavImg1} />
          </FavImgCont> {/* end favImgCont */}
          <FavImgCont className= 'favImgCont'>
            <img alt= 'favorite' src= {FavImg1} />
          </FavImgCont> {/* end favImgCont */}
        </FavoritesRow> {/* end FavoritesRow */}
      </FavDispCont> {/* end favoritesDisp */}

      {/* main display for restaurant cards */}
      <div className= 'mainDispCont'>

        {/* display cards */}
        <div className= 'card'>
          restaurant display cards go here -1
        </div>
      </div> {/* end mainDispCont */}
    </div> // end restaurantsCont
  )
}

export default Restaurants;