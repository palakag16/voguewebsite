import React ,{useEffect} from 'react';
import image1 from '../img/i1.jpg';

import image2 from '../img/i2.jpg';
import image3 from '../img/i3.jpg';
import image4 from '../img/i4.jpg';
import image5 from '../img/i5.jpg';
import image6 from '../img/i6.jpg';


import { TiSocialPinterest,TiSocialYoutube,TiSocialFacebook,TiSocialInstagram,TiSocialTwitter } from "react-icons/ti";

const Test = () => {
 
  return (
    <div>
     <div className="mainblogdiv" >
       <div className="sideimage"><img src={image4} id="imgleftbroad"></img></div>
       <div className="sidedetails">
         <div className="imgtitle newimgtitle">Beauty</div><br></br>
         <div className="newtagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex.</div>
        <div> <div className="newborder"></div></div>
        <div className="smalltagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam earum illo odit consectetur veritatis officiis?</div>
        <div className="nameanddate">
          <p>BY FIORELLA VALDESOLO</p>
          <p>12 JUNE 2021</p>
        </div>
        <div className="newicons"><TiSocialPinterest id="icon"/><TiSocialTwitter id="icon"/><TiSocialFacebook id="icon"/></div>
       </div>
     </div>
    </div>
  )
}

export default Test
