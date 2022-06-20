import express from "express";
import { listOfUsers, selectedUser } from "../controller/userController.js";
import verify from "../middleware/authMiddleware.js";

const router = express.Router();

//get all the jobSeekers
router.get("/", verify, listOfUsers);
router.get("/:id", verify, selectedUser);

export default router;
