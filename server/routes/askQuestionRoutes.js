import express from 'express';

import {
  createQuestion,
  listOfQuestions,
  question,
} from '../controller/askQuestionController.js';

import verify from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verify, listOfQuestions);
router.get('/:id', verify, question);
router.post('/create', verify, createQuestion);

export default router;
