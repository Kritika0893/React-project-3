import React from 'react'
import './Navbar.css';
import Logo from './logo11.png';

function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg p-3.4 bg-blue-700">
  <div class="container-fluid">
  
    
    <ul>
        <li class ="text-white">
            +91-7070768113
        </li>
       
    </ul>
    <ul>
        <li class ="text-white">
            ktitsme7@gmail.com
        </li>
       
    </ul>
    
    
    
  </div>
</nav>
<nav class="navbar navbar-expand-lg p-2 bg-white"  >
  <div class="container">
    <ul>
    
        <li>
            <img  class="logo"src={Logo} alt='logoimage'/>
        </li>
        </ul>

    
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Flights</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" >Hotels</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" >Activities</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" >Holidays</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" >Cars</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" >MYOP</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" >Agent Login</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" >Customer/Login</a>
        </li>
        </ul>
        

           
    
      
    
  </div>
</nav>
</>
  )
}

export default Navbar