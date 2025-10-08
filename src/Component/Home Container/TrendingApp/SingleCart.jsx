import React from "react";
import { FaStar } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { Link } from "react-router";

const SingleCart = ({ cart }) => {
  const { id, image, title, ratingAvg, downloads } = cart;
  return (
    <Link to={`/apps/${id}`}>
    <div className="card bg-base-100 shadow-sm p-3">
      <figure>
        <img
        className="h-[220px] w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="">
        <h2 className="mt-2 text-md font-semibold">
           {title}
        </h2>
        <div className="flex justify-between mt-2">
          <p className="text-xs font-semibold bg-[#f1f5e8] text-[#00d390] flex items-center gap-1 p-1 rounded"><GoDownload /> {downloads}M</p>
          <p className="text-xs font-semibold bg-[#FFF0E1] text-[#FF8811] flex items-center gap-1 p-1 rounded"><FaStar />{ratingAvg}</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default SingleCart;
