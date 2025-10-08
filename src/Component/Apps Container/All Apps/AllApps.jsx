import React from "react";
import { useLoaderData } from "react-router";
import SingleCart from "../../Home Container/TrendingApp/SingleCart";

const AllApps = () => {
  const data = useLoaderData();

  return (
    <div className="w-11/12 mx-auto">
      {/* All Apps Title  */}
      <div className="text-center pt-20">
        <h1 className="text-3xl font-extrabold text-[#001931]">
          Our All Applications
        </h1>
        <p className="py-2 text-[#627382]">
          <small>
            Explore All Apps on the Market developed by us. We code for Millions
          </small>
        </p>
      </div>

      {/* length and search section  */}
      <div className="mt-12 flex justify-between items-center">
        <h2 className="font-bold">({data.length}) Apps Found</h2>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>

      <div className="md:grid grid-cols-4 gap-5 w-11/12 mx-auto pt-6 pb-15">
        {
          data.map(cart=><SingleCart 
            key={cart.id} 
            cart={cart}
            ></SingleCart>)
        }
      </div>
    </div>
  );
};

export default AllApps;
