import React from 'react'
import image1 from '../img/i1.jpg';

import image2 from '../img/i2.jpg';
import image3 from '../img/i3.jpg';
import image4 from '../img/i4.jpg';
import image5 from '../img/i5.jpg';
import image6 from '../img/i6.jpg';
var sectionStyle = {
   
    backgroundImage:`url(${image3})`,
  };

const Compothree = () => {
    return (
        <div>
        <div className="main-class nmain">
        <h1 className="Ctitle nctitile"> fashion</h1>
        <br></br> 
        <div className="maingrid"> 
            <div  className="halfbig" style={sectionStyle}>

                <p className="inimageinfo">
                <p className="imgtitle nimg">bollywood</p>
                <p className="tagline btagline">Lorem ipsum dolor sitelit periores, aspernatur. Lorem. Lorem, ipsum.</p>
                {/* <p className="borders"><hr></hr></p> */}
                <div className="lastinfo">
                    <p className="name"> by jayanti reddy</p>
                    <p >16 june 2021</p>
                    <br></br>
                    </div>
                </p>
            </div>
         
            <div className="otherbig">
                 <div >
                 <div className="items flexitems">
            <img src={image5} className="newbigimg" alt="img"></img>
            <div className="imgsection">
                <p className="imgtitle">bollywood</p>
                <p className="tagline">Lorem ipsum dolor dipisicing elit. Autem, cumque.?</p>
                <p className="borders"><hr></hr></p>
                <div className="lastinfo">
                    <p className="name"> by jayanti reddy</p>
                    <p >16 june 2021</p>
                    <br></br>
                </div>
                <br></br>
            </div>
            
        </div>

       


                 
                 <div className="items flexitems">
            <img src={image1} className=" newbigimg" alt="img"></img>
            <div className="imgsection">
                <p className="imgtitle">bollywood</p>
                <p className="tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cumque.?</p>
                <p className="borders"><hr></hr></p>
                <div className="lastinfo">
                    <p className="name"> by jayanti reddy</p>
                    <p >16 june 2021</p>
                    <br></br>
                </div>
                <br></br>
            </div>
            
        </div>
        </div>
        <div>
        <div className="items flexitems">
            <img src={image2} className=" newbigimg" alt="img"></img>
            <div className="imgsection">
                <p className="imgtitle">bollywood</p>
                <p className="tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cumque.?</p>
                <p className="borders"><hr></hr></p>
                <div className="lastinfo">
                    <p className="name"> by jayanti reddy</p>
                    <p >16 june 2021</p>
                    <br></br>
                </div>
                <br></br>
            </div>
            
        </div>
    
        <div className="items flexitems">
            <img src={image4} className=" newbigimg" alt="img"></img>
            <div className="imgsection">
                <p className="imgtitle">bollywood</p>
                <p className="tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cumque.? Lorem ipsum dolor sit amet.</p>
                <p className="borders"><hr></hr></p>
                <div className="lastinfo">
                    <p className="name"> by jayanti reddy</p>
                    <p >16 june 2021</p>
                    <br></br>
                </div>
                <br></br>
            </div>
            
        </div>
                
                 </div>
                
           
          
        </div>
        </div>
        </div>
        </div>
    )
}

export default Compothree
