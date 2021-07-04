import React from 'react'
import image2 from '../img/i2.jpg';

const Compotwo = () => {
    return (
        <div>
            <div className="main-class">
        <h1 className="Ctitle"> in vogue</h1>
        </div>
        <br></br>
        <div className="broadcontent">
            <img alt="img" src={image2} className="broadimage"></img>
            <div className="imgsection1 imgsection">
                <p className="imgtitle">bollywood</p>
                <p className="tagline1">Lorem ipsum dolor sitelit Asperiores, aspernatur Asperiores, aspernatur Asperiores, aspernatur.</p>
                <p className="borders"><hr></hr></p>
                <div className="lastinfo">
                    <p className="name"> by jayanti reddy</p>
                    <p >16 june 2021</p>
                    <br></br>
                </div>
            </div>
            <br></br><br></br>
        </div>
        </div>
    )
}

export default Compotwo
