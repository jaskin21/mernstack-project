import React from "react";
import ProfileCardComponent from "../components/ProfileCardComponent";
import QuestionCardComponent from "../components/QuestionCardComponent";
import AnswerCardComponent from "../components/AnswerCardComponent";
import { QuestionProvider } from "../context/QuestionContext";

const ProfilePage = () => {
  return (
    <main>
      <QuestionProvider>
        <section>
          <ProfileCardComponent />
          <div className="">
            <QuestionCardComponent />
            <AnswerCardComponent />
            <AnswerCardComponent />
            <AnswerCardComponent />
          </div>
        </section>
      </QuestionProvider>
    </main>
  );
};
export default ProfilePage;

// container flex flex-col h-full mx-auto border-gray-800 border p-4 rounded-lg
