import React from 'react'
import ProfileCardComponent from '../components/ProfileCardComponent'
import QuestionCardComponent from '../components/QuestionCardComponent'
import AnswerCardComponent from '../components/AnswerCardComponent'

const ProfilePage = () => {
  return (
    <main>
      <section>
        <ProfileCardComponent />
        <div className="container flex flex-col h-full mx-auto border-gray-800 border p-4 rounded-lg">
          <QuestionCardComponent />
          <AnswerCardComponent />
          <AnswerCardComponent />
          <AnswerCardComponent />
        </div>
      </section>
    </main>
  )
}

export default ProfilePage
