import express from 'express';
import {
  createQuestion,
  listOfQuestions,
} from '../controller/askQuestionController.js';
import verify from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verify, listOfQuestions);
router.post('/create', verify, createQuestion);

export default router;
