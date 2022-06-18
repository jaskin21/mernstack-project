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
  },
  respondent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.model('AskQuestion', AskQuestionSchema);
