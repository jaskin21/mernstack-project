import React from 'react';
import ProfileCardQuestion from './cards/ProfileCardQuestion';

const AnswerCardComponent = () => {
  return (
    <section className="text-gray-400 body-font p-2">
      <div className="container mx-auto p-4 w-5/6">
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <div className="flex w-full justify-center items-end">
            <div className="relative mr-4 md:w-full text-left">
              <h3 className="px-4 font-semibold text-2xl text-white">
                This question is for you?
              </h3>
              <ProfileCardQuestion />
              <p className="px-4 value-text text-base text-white-400 fkrr1">
                His/Her Answer goes here His/Her Answer goes here His/Her Answer
                goes here His/Her Answer goes here His/Her Answer goes here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnswerCardComponent;
