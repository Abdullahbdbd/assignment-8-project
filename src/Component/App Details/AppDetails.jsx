import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import downloadIcon from '../../assets/icon-downloads.png'
import ratingsIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import Chart from "./Chart";
import AppNotFound from "../Error/AppNotFound";


const AppDetails = () => {
  const { Id } = useParams();
  const appId = parseInt(Id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appId);

  if(!singleApp){
    return <AppNotFound></AppNotFound>
  }

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
    ratings
  } = singleApp;

  return (
    <div className=" w-11/12 mx-auto pt-10">
      <div className="md:flex gap-8 w-full">
        <img
          src={image}
          className="h-[300px] w-[350px] rounded-lg shadow-2xl"
        />
        <div className="mt-2 w-full">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="font-semibold text-[#627382] mb-2">
            <small>
              Developed by <span className="text-[#632EE3]">{companyName}</span>
            </small>
          </p>
          <hr className="border-t-1 border-[#627382] opacity-40" />

          <div className="mt-10  md:flex gap-20">
            <div>
             <img src={downloadIcon} alt="" />
              <p className="text-[#627382] text-sm my-2">Downloads</p>
              <h3 className="text-3xl font-extrabold">{downloads}M</h3>
            </div>
            <div>
              <img src={ratingsIcon} alt="" />
              <p className="text-[#627382] text-sm my-2">Average Ratings</p>
              <h3 className="text-3xl font-extrabold">{ratingAvg}</h3>
            </div>
            <div>
                
              <img src={reviewIcon} alt="" />
              <p className="text-[#627382] text-sm my-2">Total Reviews</p>
              <h3 className="text-3xl font-extrabold">{reviews}</h3>
            </div>
          </div>

          <Link className="btn bg-[#00d390] text-white mt-8">Install Now (291 MB)</Link>
        </div>
      </div>


        {/* Chart section  */}
        <hr className="border-t-1 border-[#627382] opacity-40 mt-10" />
        <p className="text-black text-lg font-bold mt-5 mb-2">Rating</p>
       <Chart ratings={ratings}></Chart>                


         {/* Description Section  */}
        <hr className="border-t-1 border-[#627382] opacity-40 mt-20" />
        <p className="text-black text-lg font-bold mt-5 mb-2">Description</p>
        <p className="text-[#627382] pb-20">{description}</p>

    </div>
  );
};

export default AppDetails;
