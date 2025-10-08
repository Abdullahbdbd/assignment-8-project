import React from "react";

const States = () => {
  return (
    <div className="bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] -mt-4 p-20 flex flex-col justify-center items-center text-white">

<h2 className="text-4xl mb-6 font-bold">Trusted By Millions, Built For You</h2>

      {/* card section  */}
      <div className="flex gap-30">
        <div className="text-center">
            <p><small>Total Downloads</small></p>
            <h2 className="text-5xl font-extrabold my-2">29.6M</h2>
            <p><small>21% more than last month</small></p>
        </div>

        <div className="text-center">
            <p><small>Total Reviews</small></p>
            <h2 className="text-5xl font-extrabold my-2">906K</h2>
            <p><small>46% more than last month</small></p>
        </div>

        <div className="text-center">
            <p><small>Active Apps</small></p>
            <h2 className="text-5xl font-extrabold my-2">132+</h2>
            <p><small>31 more will Launch</small></p>
        </div>
      </div>
    </div>
  );
};

export default States;
