import React from 'react';
import Navbar from '../components/Navbar';
import Compo from '../components/Compo';
import Compotwo from '../components/Compotwo';
import Compothree from '../components/Compothree';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <br></br>
            <Compotwo/>
            <Compo/>
          
            <Compothree/>
            <Footer/>
        </div>
    )
}

export default Home
