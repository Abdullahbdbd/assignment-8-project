import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-[#D2D2D2]'>
                <Outlet></Outlet>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;