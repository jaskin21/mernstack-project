import AskQuestion from '../model/AskQuestionModel.js';
import {
  askQuestionListValidation,
  askQuestionValidation,
} from '../validation/askQuestionValidation.js';

// list of question get by spicific user
export const listOfQuestions = async (req, res) => {
  //VALIDATE THE DATA BEFORE USER
  const { error } = askQuestionListValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const items = await AskQuestion.find({
      respondent: req.body.respondent,
    }).sort({
      date: -1,
    });
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({
      message: err?.message ?? 'Something went wrong, please try again',
    });
  }
};

// create question
export const createQuestion = async (req, res) => {
  //VALIDATE THE DATA BEFORE USER
  const { error } = askQuestionValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const question = new AskQuestion({
    question: req.body.question,
    answer: req.body.answer,
    respondent: req.body.respondent,
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
