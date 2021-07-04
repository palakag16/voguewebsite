import React,{useState} from 'react';
import Countrieslist from './Countrieslist';
import { BsList } from "react-icons/bs";
import Togglemenu from './Togglemenu';
import { NavLink } from 'react-router-dom';






const Navbar = () => {
   
  const getCountries=()=>{
      const x = document.querySelector(".showcontr");
      const z = document.getElementById('countrydemos');
      x.classList.toggle('fa-chevron-up');
      z.classList.toggle('countrytoggleclass');

  }
   
        
    return (
        <div>
        <div className="shadow-sm" >
       <div className="main-class navbarmain">

       
       <div class="navbar1">
        <h1 className="vogue">VOGUE</h1>
        </div>
        <div className="edition">EDITION  <span onClick={getCountries}>INDIA <i class="fas fa-chevron-down showcontr"></i></span>
        <div className="showcountries" id="countrydemos">
           
            <Countrieslist/>
        </div>
        
        
            
        </div>
     
       </div>
       <div>
       <div className="navig">
           <div className="secs">
            <p><a href="/categories">fashion</a></p>
            <p><a href="/categories">beauty</a></p>
            <p><a href="/categories">celebrity</a></p>
            <p><a href="/categories">fashion</a></p>
            <p><a href="/categories">beauty</a></p>
            <p><a href="/categories">celebrity</a></p>
           </div>
           <div class=" subscribe ">
               {/* <NavLink  className="subsbtn"to="/subscribe">Subscribe</NavLink>
               <NavLink className="list" to="/menu"> <BsList  />
               </NavLink> */}
               <NavLink to="/subscribe" className="sunsbtn">Subscribe</NavLink>
               <NavLink to="/menu" className="list"><i class="fas fa-bars"></i></NavLink>
               
           </div>
       </div>
        </div>
        </div>
        
        </div>
    )
}

export default Navbar
