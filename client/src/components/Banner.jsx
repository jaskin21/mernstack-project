import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-5xl pt-40 pb-24 mx-auto">
      <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
        Create your next website fast and easy
      </h1>
      <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
        nine4 is a free to use template website for websites made
        <br />
        with Next.js and styled with Tailwind CSS
      </h2>
      <div className="ml-6 text-center">
        <Link
          className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
          to={"/about"}
        >
          <div className="flex text-lg">
            <span className="justify-center">Learn more</span>
          </div>
        </Link>
        {/* <Link
          className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
          to={'/register'}
        >
          <div className="flex text-lg">
            <span className="justify-center">Join now</span>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Banner;
