import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { BallTriangle, Bars } from "react-loader-spinner";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-screen bg-white">
          {/* <div className="w-12 h-12 border-4 border-t-[#632EE3] border-gray-300 rounded-full animate-spin"></div> */}
          <p className="mt-4 text-gray-500 font-medium text-sm">
            <Bars
              height="80"
              width="80"
              color="#632EE3"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </p>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="bg-[#f3f3f3] min-h-screen">
            <Outlet />
          </div>
          <Footer />
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default Root;
