import React from "react";
import Banner from "../components/Banner";
import ProfileCardLandingPage from "../components/cards/ProfileCardLandingPage";
import Newsletter from "../components/Newsletter";

const LandingPage = () => {
  return (
    <section className="text-gray-600 body-font">
      <Banner />

      <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Clean and tidy code.
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        Here is our collection of free to use templates made with Next.js &
        styled with Tailwind CSS.
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        <ProfileCardLandingPage />
        <ProfileCardLandingPage />
        <ProfileCardLandingPage />
        <ProfileCardLandingPage />
      </div>
      <Newsletter />
    </section>
  );
};

export default LandingPage;
