import { createContext, useState, useEffect } from "react";
import axios from "axios";

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  // fetch all filtered question
  const [questionList, setQuestionList] = useState([]);

  // api link
  const api = "http://localhost:5000";

  // useEffect for fetching all data from mongoose
  useEffect(() => {
    fetchQuestions();
  }, []);

  // Add Feedback
  const fetchQuestions = async (e) => {
    try {
      const { data } = await axios.post(api + "/ask-question/");
      setQuestionList(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <QuestionContext.Provider
      value={{
        questionList,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContext;
