import React from "react";
import googlePlay from '../../../assets/google-play.png'
import appStore from '../../../assets/app-store.png'
import hero from '../../../assets/hero.png'

import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero bg-base-200 px-20 pt-20 ">
      <div className="hero-content text-center">

        {/* Titel Section  */}
        <div className=""> 
          <h1 className="text-5xl font-extrabold text-[#001931]">
            We Build <br /> 
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
             Productive 
            </span> Apps
          </h1>
          <p className="py-6 text-[#627382]">
           At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>


          {/* Button Section  */}
          <Link to='https://play.google.com/store/games?hl=en' target="_blank" className="btn p-6 text-md mr-4"><img src={googlePlay} alt="" /> Google Play</Link>
          <Link to='https://www.apple.com/app-store/' target="_blank" className="btn p-6 text-md"><img src={appStore} alt="" /> App Store</Link>


          {/* Banner Img Section  */}
          <div>
            <img className="w-9/12 mx-auto mt-8" src={hero} alt="" />
          </div>

        </div>

        
      </div>
    </div>
  );
};

export default Banner;
