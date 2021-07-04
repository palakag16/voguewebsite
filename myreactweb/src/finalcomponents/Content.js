import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Blogtext from '../components/Blogtext';
import Test from '../components/Test';
import Menu from '../components/Menu';

const Content = () => {
    return (
        <div>
            <Navbar/>
            <Menu/>
            <Test/>
            <Blogtext/>
            <Footer/>
        </div>
    )
}

export default Content
