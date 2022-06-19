import React from "react";

const QuestionCardComponent = () => {
  return (
    <section className="text-gray-400 body-font p-2">
      <div className="container mx-auto">
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <div className="flex w-full justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-gray-400"
              ></label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                placeholder="Enter a Question..."
                className="w-full  bg-black rounded border  border-gray-50 focus:ring-2 focus:ring-indigo-100 focus:bg-transparent focus:border-blue-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionCardComponent;
