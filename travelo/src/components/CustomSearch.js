import React from 'react'
import './CustomSearch.css'


function CustomSearch() {
  return (
    <div class="searchbar">
      <div class="row">
        <ul>
            
            <li class="box" ><i class="fa-solid fa-plane-circle-exclamation"></i>Departure city</li>
            
            <li ><div class="flightchange"><i class="fa-solid fa-arrow-right-arrow-left"></i></div></li>
            
            
            <li class="box"><i class="fa-solid fa-plane-circle-exclamation"></i>Destination city</li>
            
            <li class="box"> <i class="fa-solid fa-calendar-days"></i>Select Date</li>
            
            <li class="box"><i class="fa-solid fa-calendar-days"></i>Traveler</li>
          
            <li class="searching">Search</li>
            
            
        </ul>
        </div>

    </div>
  )
}

export default CustomSearch