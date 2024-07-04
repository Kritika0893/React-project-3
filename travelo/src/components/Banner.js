import React from 'react'
import './Banner.css'
import Flight from './flight.png'
import Hotel from './hotels.png'
import Activity from './activity.png'
import Holiday from './holiday.png'
import MYOP from './myop.png'
import CARS from './cars.png'

function Banner() {
  return (
    <div>
        <div class="banner">
        <div class="banner-text ">
        Amazing Offers on the choosing Package
        </div>
        <p/>
        <div class="search-container bg-primary ">
            {/* <input type="text" placeholder="Search..."/> */}
            <button >  <ul><li><img  class="flight"src={Flight} alt='flightimage'/></li><li>FLIGHTS</li></ul></button>
            <button ><ul><li><img  class="hotel"src={Hotel} alt='hotelimage'/></li><li>HOTELS</li></ul></button>
            <button ><ul><li><img  class="activity"src={Activity} alt='activityimage'/></li><li>ACTIVITIES</li></ul></button>
            <button><ul><li><img  class="holiday"src={Holiday} alt='holidayimage'/></li><li>HOLIDAY</li></ul></button>
            <button ><ul><li><img  class="myop"src={MYOP} alt='myopimage'/></li><li>MYOP</li></ul></button>
            <button ><ul><li><img  class="car"src={CARS} alt='carimage'/></li><li>CARS</li></ul></button>
            
        </div>
        
       
        
        
    </div>
       
    </div>
    
  )
}

export default Banner