import React from 'react';
import Compothree from '../components/Compothree';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Compofour from '../components/Compofour';

const Intermediate = () => {
    return (
        <div>
            {/* <Navbar/>
            <Menu/>
           
            <Footer/> */}
             <Navbar/>
            <Menu/>
            <Compofour title="beauty"/> <Compofour title="bollywood"/>
            <Footer/>
        </div>
    )
}

export default Intermediate
