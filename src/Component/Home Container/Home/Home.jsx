import React, { Suspense } from "react";
import Banner from "../Banner/Banner";
import States from "../States/States";
import TrendingApps from "../TrendingApp/TrendingApps";

const Home = () => {

// Trending App Cart fetch
const tAData = fetch("/Data.json").then((res) => res.json());

  return (
    <div>
        <Banner></Banner>
        <States></States>

        <Suspense fallback={<h1>Loading........</h1>}>
        <TrendingApps tAData={tAData}></TrendingApps>
        </Suspense>
    </div>
  );
};

export default Home;
