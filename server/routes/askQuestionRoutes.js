import express from 'express';

import verify from '../middleware/authMiddleware.js';

const router = express.Router();

// router.post('/create', verify, registerUser);
// router.get('/list', verify, registerUser);
// router.get('/list/:id', verify, registerUser);

export default router;
