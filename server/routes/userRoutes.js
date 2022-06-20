import express from 'express';
import { userProfile } from '../controller/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { listOfUsers, selectedUser } from "../controller/userController.js";
import verify from "../middleware/authMiddleware.js";

const router = express.Router();

//get all the jobSeekers
router.get("/", verify, listOfUsers);
router.get("/:id", verify, selectedUser);
router.post('/me', authMiddleware, userProfile);


export default router;
