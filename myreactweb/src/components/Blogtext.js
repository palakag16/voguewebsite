import React from 'react'
import image1 from '../img/i1.jpg';

import image2 from '../img/i2.jpg';
import image3 from '../img/i3.jpg';
import image4 from '../img/i4.jpg';
import image5 from '../img/i5.jpg';
import image6 from '../img/i6.jpg';
import Sidead from './Sidead';

const Blogtext = () => {
    return (
        <div>
        <div className="mainblogcontent">
        <div className="contents">
        <div className="content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolores, minus ipsam voluptatum vitae explicabo, pariatur fuga eveniet cupiditate nam officiis iusto voluptatem maiores dolor praesentium consequuntur labore dignissimos eligendi?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto autem neque enim inventore dolor incidunt, dolore animi ad deserunt temporibus porro placeat! Voluptas quod laudantium dolorem aspernatur veniam accusamus? Quas.</div>
        <div ><img src={image1} className="contentimage" title="hey"></img> <p className="imageinfotitle">picture sourced from google</p></div>
       
        <div className="content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia fugit quos atque culpa dolor placeat, iure, natus esse illo ad architecto rem ipsum recusandae error nesciunt, soluta inventore delectus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus doloremque necessitatibus repellat ab aliquid nulla vero ad cumque adipisci saepe sunt maxime, dicta nihil fugit qui veniam sequi voluptatem eligendi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam expedita quia optio eius enim? Modi libero, repellat eligendi, commodi atque vitae possimus, dolore iusto doloribus perspiciatis ullam quam odio.</div>
        <div className="content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolores, minus ipsam voluptatum vitae explicabo, pariatur fuga eveniet cupiditate nam officiis iusto voluptatem maiores dolor praesentium consequuntur labore dignissimos eligendi?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto autem neque enim inventore dolor incidunt, dolore animi ad deserunt temporibus porro placeat! Voluptas quod laudantium dolorem aspernatur veniam accusamus? Quas.</div>
        <div ><img src={image2} className="contentimage" title="hey"></img> <p className="imageinfotitle">picture sourced from google</p></div>
       
        </div>

        <div className="ads">
      
       
            <div className="leftads">
                 <div className="watch">watch</div>
                <div  className="imgs"><img src={image2} className="imagevideo" ></img></div>
                <div className="videotitle">grossroot by anita dongre</div>
                <br></br>
                <div className="width75">
                <div className="mostpopular">most popular</div>
                <div className="getborder">
                <Sidead imgsrc1={image3}/> <Sidead imgsrc1={image1}/> <Sidead imgsrc1={image2}/>
                </div>
                {/* <div className="element1">
                    <div className="smallimg"><img src={image3} ></img></div>
                    <div className="itsinfo">
                        <div className="headingside">Beauty</div>
                        <div className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, culpa.</div>
                        <div className="credit">by avanti dalal</div>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
        </div>


       

     
            
        </div>
    )
}

export default Blogtext
