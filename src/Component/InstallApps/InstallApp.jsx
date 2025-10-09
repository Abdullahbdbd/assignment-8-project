import React from 'react';
import { FaStar } from 'react-icons/fa';
import { GoDownload } from 'react-icons/go';

const InstallApp = ({cart, handleRemove}) => {
    const {
    id, 
    image,
    title,
    downloads,
    ratingAvg,
    size
}=cart

    return (
        <div>
    
            <ul className="list bg-base-100 rounded-box shadow-md my-3">
  
                <li className="list-row">
                    <div><img className="size-11 rounded-box" src={image}/></div>

                    <div>
                    <div className='font-semibold'>{title}</div>

                    <div className="flex mt-1 gap-3">
                                <p className="text-xs font-semibold text-[#00d390] flex items-center rounded"><GoDownload /> {downloads}M</p>
                                <p className="text-xs font-semibold text-[#FF8811] flex items-center rounded"><FaStar />{ratingAvg}</p>
                                <p className='text-[#627382] text-xs font-semibold'>{size} MB</p>
                            </div>
                    </div>

                <button 
                onClick={()=>handleRemove(id)}
                className="btn bg-[#00d390] text-white"
                >Uninstall </button>


               </li>
  
          </ul>
        </div>
    );
};

export default InstallApp;