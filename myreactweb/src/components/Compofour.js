import React from 'react';
import image2 from '../img/i2.jpg';
import image3 from '../img/i3.jpg';
import image4 from '../img/i4.jpg';
import image5 from '../img/i5.jpg';
import image6 from '../img/i6.jpg';
import Subfourcomp from './Subfourcomp'

const Compofour = (props) => {
    
    return (
        <div>
            <div className="compofourmain">
                <div className="box1">
                    <div  ><img src={image4} className="img"></img></div>
                    <div className="boxtitle">
                        <div>
                            <div className="cfourtitle">{props.title}</div>
                            <div className="cfourtagline">Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
                            <div className="cfourborder"></div>
                            <div className="cfourdateandname"> mellis hover 21 june 2021</div>
                        </div>
                    </div>
                </div> 
                
               <div className="box2box3">
               <div className="box2">
                    
                    <Subfourcomp imgsrc={image5}/>   <Subfourcomp imgsrc={image3}/> 
                </div>

                 <div><Subfourcomp imgsrc={image2}/><Subfourcomp imgsrc={image6}/></div>
               </div>

               
            </div> 
        </div>
    )
}

export default Compofour
