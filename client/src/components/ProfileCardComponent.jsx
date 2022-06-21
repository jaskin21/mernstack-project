import React, { useContext } from 'react';
import AppContext from '../AppContext';

const ProfileCardComponent = () => {
  const { userInfo } = useContext(AppContext);

  return (
    <section className="text-gray-400 body-font">
      <div className="container py-10 mx-auto">
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-5/6">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://dummyimage.com/200x200"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-white">
                    {userInfo?.username}
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCardComponent;
