import React from 'react';
// import { BsLayoutSidebar } from 'react-icons/bs';
import Footertwo from './Footertwo';
import { FaChevronDown , FaChevronUp} from "react-icons/fa";
import { TiSocialPinterest,TiSocialYoutube,TiSocialFacebook,TiSocialInstagram,TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
    function clicked(){
        
        var x = document.getElementById('demo');
        var z = document.querySelector('.fa-chevron-down');
        z.classList.toggle('fa-chevron-up');
        x.classList.toggle('newuls');
          
    //     if (x.style.display === "none") {
          
    //      x.style.display = "block";
    //    } else {
    //      x.style.display = "none";
       
    //    }
       

      }
      function clickes(){
        var x = document.getElementById('demos');
       
        var z = document.querySelector('.newfs');
        z.classList.toggle('fa-chevron-up');
        x.classList.toggle('newuls');

      }
      

 
    return (
        <div>
            <div className="footer_div">
                <div className="footer-start">
                    <div className="firstcol colspad">
                        <div className="footer-vogue">VOGuE</div>
                        <ul className="icons">
                        <li className="youpint"><TiSocialPinterest/></li>
                        <li className="facebook"><TiSocialFacebook/></li> <li className="insta"><TiSocialInstagram/></li> <li className="twitter"><TiSocialTwitter/></li> <li className="youpint"><TiSocialYoutube/></li>
                        </ul>
                    </div>

                    <div className="otherflex">
                    <div className="secondcol colspad"> 
                        <p className="firstel"> see more stories<span className="clickme" onClick={clicked} ><i class="fas fa-chevron-down"></i></span></p>
                        <ul className="uls" id="demo" ><li>fashion</li> <li>beauty</li> <li>wedding</li> <li>vogue</li> <li>what's new</li></ul>
                    </div>
                    <div className="thirdcol colspad">
                        <p className="firstel">conde nast india<span className="clickme" onClick={clickes} ><i class="fas fa-chevron-down newfs"></i></span></p>
                        <ul className="uls" id="demos" > <li>GQ</li> <li>traveler</li> <li>vogue</li> <li>AD</li>
                        
                        </ul>
                    </div>

                
                </div>
            </div>
            </div>
            <Footertwo/>
     
        </div>
    )
}

export default Footer
