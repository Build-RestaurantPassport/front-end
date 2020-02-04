import React from 'react';

//components

//styles

const Restaurants = () => {
  return (
    <div className= 'restaurantsCont'>
      <div className= 'restaurantsHeader'>
        <span>Current Location</span>
        <span><a href= '#'>menu button</a></span>
      </div>
      <h1>restaurants page</h1>
      <input 
        name= 'locationFilter'
        placeholder= 'enter location'
      />
      <div className= 'favoritesDisp'>
        <div>
          <span>Favorites</span> 
          <span><a href= '#'>See All</a></span>
        </div>
        <div className= 'mainDispCont'>

          <div className= 'card'>
            restaurant display cards go here -1
          </div>

          <div className= 'card'>
            restaurant display cards go here -2
          </div>

          <div className= 'card'>
            restaurant display cards go here -3
          </div>

        </div>
      </div>
    </div>
  )
}

export default Restaurants;