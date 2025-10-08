import { use } from "react";
import { LuGoal } from "react-icons/lu";
import SingleCart from "./SingleCart";
import { Link } from "react-router";

const TrendingApps = ({ tAData }) => {
  const data = use(tAData);
  const newData = data.slice(0, 8);

  return (
    <div className="mt-20">
      {/* Trending Apps Cart  */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Trending Apps</h2>
        <p className="text-[#627382] text-sm mb-5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="md:grid grid-cols-4 gap-5 w-11/12 mx-auto">
        {newData.map((cart) => (
          <SingleCart key={cart.id} cart={cart}></SingleCart>
        ))}
      </div>

      <div className="flex justify-center mt-10 pb-20">
        <Link
          to="/apps"
          className="btn btn-sm text-md text-white bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] p-5"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
