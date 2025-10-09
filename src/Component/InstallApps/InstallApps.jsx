import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApps, removeFromWishlist } from "../../utility/addToDB";
import downImg from "../../assets/down.png";
import InstallApp from "./InstallApp";
import { toast } from "react-toastify";

const InstallApps = () => {
  const [installList, setInstallList] = useState([]);
   const [sortLabel, setSortLabel] = useState("Sort By Size");
  const data = useLoaderData();

  useEffect(() => {
    const storedAppData = getStoredApps();
    const convertedStoredApps = storedAppData.map((id) => parseInt(id));
    const myInstallAppList = data.filter((app) =>
      convertedStoredApps.includes(app.id)
    );
    setInstallList(myInstallAppList);
  }, []);


   const handleSelect = (option) => {
    setSortLabel(option);
    if(option === "Low - High"){
        const lowToHigh = [...installList].sort((a,b)=>a.downloads - b.downloads);
        setInstallList(lowToHigh)
    }
    else if (option === "High - Low"){
        const lowToHigh = [...installList].sort((a,b)=>b.downloads - a.downloads);
        setInstallList(lowToHigh)
    }

  };


  const handleRemove = (id) => {
  removeFromWishlist(id); 
  setInstallList(prev => prev.filter(p => p.id !== id)); 
  toast.success('App Are Uninstalled')
}

  return (
    <div className="w-11/12 mx-auto">
      {/* Title  */}
      <div className="text-center pt-20">
        <h1 className="text-3xl font-extrabold text-[#001931]">
          Your Installed Apps
        </h1>
        <p className="py-2 text-[#627382]">
          <small>Explore All Trending Apps on the Market developed by us</small>
        </p>
      </div>

      {/* Data found and sort  */}
      <div className="mt-12 flex justify-between items-center">
        <h2 className="font-bold">({installList.length}) Apps Found</h2>

        <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 text-gray-500 flex items-center gap-2"
      >
        {sortLabel}
        <img src={downImg} alt="down icon" className="w-4 h-4" />
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm font-semibold"
      >
        <li>
          <button onClick={() => handleSelect("Low - High")}>Low - High</button>
        </li>
        <hr className="border-t border-[#627382] opacity-40" />
        <li>
          <button onClick={() => handleSelect("High - Low")}>High - Low</button>
        </li>
      </ul>
    </div>

      </div>

      {/* all cart  */}
      <div className="pb-10">
        {installList.map((cart) => (
          <InstallApp key={cart.id} cart={cart} handleRemove={handleRemove}></InstallApp>
        ))}
      </div>
    </div>
  );
};

export default InstallApps;