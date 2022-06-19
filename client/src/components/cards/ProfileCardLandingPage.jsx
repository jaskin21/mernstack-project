import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCardLandingPage = () => {
  return (
    <Link to={'/user'}>
      <div className="ktq4">
        <div className="ktq5 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-28 h-28 object-cover object-center sm:mb-0 mb-4"
            src="https://github.com/identicons/jayaregalinada.png"
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">
              Holden Caulfield
            </h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProfileCardLandingPage;
