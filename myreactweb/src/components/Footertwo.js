import React from 'react';
import { FaChevronDown , FaChevronUp} from "react-icons/fa";


const Footertwo = () => {
    const getCountries=()=>{
        const x = document.querySelector(".showcountryfooter");
        const z = document.getElementById('newdemofooter');
        x.classList.toggle('fa-chevron-up');
        z.classList.toggle('countrytoggleclass');
    }
    return (
        <div>
           <div className="bgblack">
           <div className="maindiv">
               <div className="navs">
                   <ul className="footerlist">
                       <li>Terms of Service<span className="dash">|</span></li>
                       <li>Contact<span className="dash">|</span></li>
                       <li>newsletter<span className="dash">|</span></li> <li>advertising<span className="dash">|</span></li> <li>careers<span className="dash">|</span></li> <li>subscribe <span className="dash"></span></li>
                       <div className="cookiesetting"> cookie setting</div>
                   </ul>
                   
               </div>
               <div className="india">india<span onclick={getCountries}><i class="fas fa-chevron-down showcountryfooter"></i></span>
              
               </div>
           </div>
           <br></br>
           <div className="copyright">	&#169; 2021 Conde Nast</div>
           </div>
        </div>
    )
}

export default Footertwo
