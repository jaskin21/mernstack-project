import React from 'react'
import ProfileCardComponent from '../components/ProfileCardComponent'
import QuestionCardComponent from '../components/QuestionCardComponent'
import AnswerCardComponent from '../components/AnswerCardComponent'

const ProfilePage = () => {
  return (
   <section>
    <ProfileCardComponent />
    <QuestionCardComponent />
    <AnswerCardComponent />
   </section>
  )
}

export default ProfilePage
