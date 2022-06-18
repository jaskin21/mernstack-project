import User from '../model/UserModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';

import {
  registerValidation,
  loginValidation,
} from '../validation/userValidation.js';

//generate a token
const signToken = (id) => {
  return jwt.sign({ _id: id }, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRES_IN,
  });
};

// register a user
export const registerUser = async (req, res) => {
  // Validate the data before user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Chesking if email is unique
  const emailExist = await User.findOne({ email: req.body.email }).exec();
  if (emailExist) return res.status(400).send('Email already Exist!');

  // Create a new user
  const userDetails = new User(req.body);

  try {
    const saveUser = await userDetails.save();

    // Create and assign a token
    const token = signToken(saveUser._id);

    res.status(200).send({
      status: 'success',
      token,
      data: { user: saveUser },
    });
  } catch (err) {
    res.status(400).send({
      message: err?.message ?? 'Something went wrong, please try again',
    });
  }
};

//login a job seeker
export const loginUser = async (req, res) => {
  //VALIDATE THE DATA BEFORE USER
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if email exist
  const userEmail = await User.findOne({ email: req.body.email })
    .select({ password: 1 })
    .exec();
  console.log(userEmail);
  if (!userEmail) return res.status(400).send('Email or password is wrong');

  //Check if password is correct
  const validPassword = bcrypt.compareSync(
    req.body.password,
    userEmail.password
  );

  if (!validPassword) return res.status(400).send('Email or password is wrong');

  try {
    // Create and assign a token
    const token = signToken();
    res.json({
      status: 'success!',
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err?.message ?? 'Something went wrong, please try again',
    });
  }
};
