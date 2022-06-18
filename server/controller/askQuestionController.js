import AskQuestion from '../model/AskQuestionModel.js';
import { askQuestionValidation } from '../validation/askQuestionValidation.js';

// create question
export const createQuestion = async (req, res) => {
  //VALIDATE THE DATA BEFORE USER
  const { error } = askQuestionValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const question = new AskQuestion({
    question: req.body.question,
    answer: req.body.answer,
    respondent: req.body.answer,
  });
  try {
    const saveQuestion = await question.save();
    res.status(200).json(saveQuestion);
  } catch (error) {
    res.status(400).json({
      message: error?.message ?? 'Something went wrong, please try again',
    });
  }
};
export const listOfQuestions = async (req, res) => {};
export const question = async (req, res) => {};
