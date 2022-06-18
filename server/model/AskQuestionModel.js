import mongoose from 'mongoose';

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
    type: String,
    ref: 'User',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model('AskQuestion', AskQuestionSchema);
