import React from "react";

const ProfileCardQuestion = () => {
  return (
    <div className="p-3 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
      <img
        alt="team"
        className="flex-shrink-0 rounded-lg w-8 h-8 object-cover object-center sm:mb-0 mb-4"
        src="https://github.com/identicons/jayaregalinada.png"
      />
      <div className="flex-grow sm:pl-8">
        <h2 className="title-font font-medium text-lg text-white">UserName</h2>
      </div>
    </div>
  );
};

export default ProfileCardQuestion;
