import React, { useState } from 'react';

const DropDownHeader = () => {
  const [flyer, setFlyer] = useState(false);
  const [, setFlyerTwo] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="
     group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none pb-8'
    "
        onMouseEnter={() => (setFlyer(!flyer), setFlyerTwo(false))}
      >
        <span className="tr04">Templates</span>
        <svg
          className={
            flyer === true
              ? 'transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200'
              : 'ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500'
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        onMouseLeave={() => setFlyer(false)}
        className={
          flyer
            ? 'opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 g327 border transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
            : 'hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
        }
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="relative grid gap-6 bg-black px-2 py-6 sm:gap-8 ">
            <a
              href="/"
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
            >
              <div className="ml-4">
                <p className="text-base font-medium text-white">
                  NINE4 TEMPLATE #1
                </p>
                <p className="mt-1 text-sm text-gray-500">First Template</p>
              </div>
            </a>
            <a
              href="/"
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
            >
              <div className="ml-4">
                <p className="text-base font-medium text-white">
                  NINE4 TEMPLATE #2
                </p>
                <p className="mt-1 text-sm text-gray-500">Second Template</p>
              </div>
            </a>
            <a
              href="/"
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
            >
              <div className="ml-4">
                <p className="text-base font-medium text-white">
                  NINE4 TEMPLATE #3
                </p>
                <p className="mt-1 text-sm text-gray-500">Third Template</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownHeader;
