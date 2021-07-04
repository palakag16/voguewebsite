import React from 'react'
import imagesrc from '../img/voguemagzine.jpg'

const Subscribe = () => {
    return (
       <div>
           <div className="subscribemain">
              
               <div className="subscribetitle">
               <div>Amazing Subscription Offers</div>
               <p>Get your copy of VOGUE delivered FREE to your door before it hits the shops + FREE digital editions on Apple and Android devices! Alternatively, choose from one of our fantastic digital-only offers.</p>
               </div>
               <div className="deliverytitle">Enjoy free  doorstep delivery</div>
           </div>
           <div className="subscribegrid">
               <div className="subscribebox">
                   <div className="magzinetitle">Digital</div>
                   <div className="objectives">
                       <ul>
                           <li>print edition</li>
                           <li>doorstep delivery</li>
                           <li>free gifts</li>
                           <li>monthly publish</li>
                       </ul>
                   </div>
                   <div className="getthis">Get this</div>
               </div> 


               <div className="subscribebox">
                   <div className="magzinetitle">print</div>
                   <div className="objectives">
                       <ul>
                           <li>print edition</li>
                           <li>doorstep delivery</li>
                           <li>free gifts</li>
                           <li>monthly publish</li>
                       </ul>
                   </div>
                   <div className="getthis"> Get this</div>
               </div> 
           </div>
       </div>
    )
}

export default Subscribe
