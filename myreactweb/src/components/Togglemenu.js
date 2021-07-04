import React from 'react';
import { useHistory } from 'react-router';
import { TiSocialPinterest,TiSocialYoutube,TiSocialFacebook,TiSocialInstagram,TiSocialTwitter } from "react-icons/ti";
//menu to show on hamburger icon
const Togglemenu = () => {
    const history = useHistory()
    const goBackto=()=>{
        history.goBack();
    }
    return (
        <div className="mainmenutoggleone">
        <div className="togglemenus">
            <div className="topmenu">
                <div className="vogueblack">vogue</div>
                <div><i class="far fa-times-circle " onClick={goBackto}></i></div>
            </div>
        </div>
        <div className="topmenu mobiletopmenu">
        <div>
            <ul className="menuulsbig">
                <li>beauty</li> <li>fashion</li> <li>wedding</li> <li>couture</li> <li>bollywood</li> <li>celebrity</li> <li>vogue life</li>
            </ul>
             {/* <div className="socialmediatags">connect with vogue</div>
             <div className="newicons"><TiSocialPinterest id="icon"/><TiSocialTwitter id="icon"/><TiSocialFacebook id="icon"/></div> */}
        </div>
        <div>
            <ul className="menuuls"><li>subscribe</li> <li>newsletter</li></ul>
        </div>
        <div>
            <ul className="menuuls" id="submenulistgrid"> <li>india</li>
                <li>australia</li>
                <li>germany</li>
                <li>africa</li>
                <li>america</li>
                <li>swizherland</li>
                <li>india</li>
                <li>australia</li>
                <li>germany</li><li>america</li>
                <li>swizherland</li>
                <li>india</li>
                <li>australia</li>
                <li>germany</li>
                <li>africa</li>
                <li>america</li>
                <li>swizherland</li></ul>
        </div>
        </div>
         <div className="connectwithvogue">
         <div className="socialmediatags">connect with vogue</div>
             <div className="newicons"><TiSocialPinterest id="icon"/><TiSocialTwitter id="icon"/><TiSocialFacebook id="icon"/></div>
         </div>
        </div>
    )
}

export default Togglemenu
