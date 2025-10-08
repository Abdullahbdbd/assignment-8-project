import React from 'react';
import { Link } from 'react-router';
import errorImg from '../../assets/error-404.png'
const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center p-10'>
            <img className='w-[30%]' src={errorImg} alt="" />
            <h3 className='text-3xl font-bold mt-10'>Oops, page not found!</h3>
            <p className='text-[#627382] text-sm p-2'>The page you are looking for is not available.</p>


            <Link to='/' 
                  className="btn btn-md text-xs text-white bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)]"
            >
          Go Home 
          </Link>
        </div>
    );
};

export default Error;