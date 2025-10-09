import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCart from "../../Home Container/TrendingApp/SingleCart";
import AppNotFound from "../../Error/AppNotFound";
import { Bars } from "react-loader-spinner";

const AllApps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const term = search.trim().toLowerCase();

      const result = term
        ? data.filter((product) =>
            product.title.toLowerCase().includes(term)
          )
        : data;

      setFilteredData(result);
      setLoading(false);
    }, 300); 
  }, [search, data]);

  return (
    <div className="w-11/12 mx-auto">
      {/* Title */}
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

      {/* Search + count */}
      <div className="mt-12 md:flex justify-between items-center">
        <h2 className="font-bold text-center">({filteredData.length}) Apps Found</h2>

        <label className="input ml-10 md:ml-0">
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

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </label>
      </div>

      {/* Loading + Results */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Bars height="80" width="80" color="#632EE3" visible={true} />
        </div>
      ) : filteredData.length === 0 ? (
        <AppNotFound />
      ) : (
        <div className="md:grid grid-cols-4 gap-5 w-11/12 mx-auto pt-6 pb-15">
          {filteredData.map((cart) => (
            <SingleCart key={cart.id} cart={cart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
