import React from 'react';
import image1 from '../img/i1.jpg';

import image2 from '../img/i2.jpg';
import image3 from '../img/i3.jpg';
import image4 from '../img/i4.jpg';
import image5 from '../img/i5.jpg';
import image6 from '../img/i6.jpg';


const Compo = () => {
    return (
        <div>
        <div className="main-class">
        <h1 className="Ctitle"> Read now</h1>
        <br></br> 
        <div className="gridelems">

        <div className="item1 flexitems">
            <img src={image1} className="sectionimg" alt="img"></img>
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

        <div className="item2 flexitems">
        <img src={image2} className="sectionimg" alt="img"></img>
        <div className="imgsection">
                <p className="imgtitle">beauty</p>
                <p className="tagline">Lorem ipsum dolor utem, cumque.?</p>
                <p className="borders"><hr></hr> </p>
                <div className="lastinfo">
                    <p className="name"> by manish malhotra</p>
                    <p >16 june 2021</p>
                    <br></br>
                </div>
                <br></br>
            </div>
        </div>

        <div className="item3 flexitems">
        <img src={image3} className="sectionimg" alt="img"></img>
        <div className="imgsection">
                <p className="imgtitle">Fashion</p>
                <p className="tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cumque.?</p>
                <p className="borders"> <hr></hr></p>
                <div className="lastinfo">
                    <p className="name"> by palak agrwal</p>
                    <p >16 june 2021</p>
                    <br></br>
                </div>
                <br></br>
            </div>
        </div>

        <div className="item4 flexitems">
        <img src={image4} className="sectionimg" alt="img"></img>
        <div className="imgsection">
                <p className="imgtitle">Tips</p>
                <p className="tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cumque.?</p>
                <p className="borders"><hr></hr></p>
                <div className="lastinfo">
                    <p className="name"> by  DIVYA BALA</p>
                    <p >16 june 2021</p>
                    <br></br>
                </div>
            </div>
            <br></br>
        </div>
            
        </div>
        

        </div>
           
        </div>
    )
}

export default Compo
