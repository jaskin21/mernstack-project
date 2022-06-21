import React from "react";
import ProfileCardComponent from "../components/ProfileCardComponent";
import QuestionCardComponent from "../components/QuestionCardComponent";
import AnswerCardComponent from "../components/AnswerCardComponent";
import Header from "../components/Header";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <div className="main-container pt-20 text-white ">
        <main>
          <section>
            <ProfileCardComponent />
            <div className="">
              <QuestionCardComponent />
              <AnswerCardComponent />
              <AnswerCardComponent />
              <AnswerCardComponent />
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default ProfilePage;

// container flex flex-col h-full mx-auto border-gray-800 border p-4 rounded-lg
