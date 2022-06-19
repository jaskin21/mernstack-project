import React from "react";
import ProfileCardComponent from "../components/ProfileCardComponent";
import QuestionCardComponent from "../components/QuestionCardComponent";
import AnswerCardComponent from "../components/AnswerCardComponent";

const ProfilePage = () => {
  return (
    <section className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
      <ProfileCardComponent />
      <QuestionCardComponent />
      <AnswerCardComponent />
      <AnswerCardComponent />
      <AnswerCardComponent />
    </section>
  );
};
export default ProfilePage;
