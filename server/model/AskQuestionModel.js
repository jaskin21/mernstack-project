import mongoose from 'mongoose';
import UserModel from './UserModel.js';

const AskQuestionSchema = mongoose.Schema({
  question: {
    type: String,
    required: [true, 'This should not be empty.'],
    max: 500,
  },
  answer: {
    type: String,
    max: 700,
    default: undefined,
  },
  respondent: {
    type: mongoose.Types.ObjectId,
    ref: UserModel,
  },
  date: {
    type: Date,
    default: () => Date.now(),
  },
});

export default mongoose.model('AskQuestion', AskQuestionSchema);
