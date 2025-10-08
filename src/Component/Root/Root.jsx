import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-[#f3f3f3]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;