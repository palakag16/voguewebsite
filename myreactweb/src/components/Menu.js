import React from 'react';
import { NavLink } from 'react-router-dom';

var selectStyle = {
    color:"red",borderBottom:"2px solid red"
}

const Menu = () => {
    const getElem =(e)=>{
        const namesubname = document.querySelector('.namesubname');
        namesubname.innerHTML = e.target.innerHTML;
    }
    return (
        <div>
        
       <div className="menusubmenu d-flex  flex-column ">
           <div className="namesubname">lifestyle</div>
           <ul className="submenulist">
               <li><NavLink to='/' onClick={getElem}  exact activeStyle={selectStyle}>beauty</NavLink></li>
               <li><NavLink to="/content" onClick={getElem}  exact activeStyle={selectStyle} >bollywood</NavLink></li>
               <li><NavLink to="/wedding" onClick={getElem}  exact activeStyle={selectStyle}  >wedding</NavLink></li> 
               <li><NavLink to="/awards" onClick={getElem} exact activeStyle={selectStyle}>Awards</NavLink></li>
               <li><NavLink to="/fashion" onClick={getElem}  exact activeStyle={selectStyle}  >fashion</NavLink></li> 
               <li><NavLink to="/maeup" onClick={getElem} exact activeStyle={selectStyle}>makeup</NavLink></li>
               
           </ul>
       </div>
        
            
        </div>
    )
}

export default Menu


