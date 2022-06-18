import User from '../model/UserModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import debugLib from 'debug';
import {
  registerValidation,
  loginValidation,
} from '../validation/userValidation.js';
import errorResponseFactory from '../utils/errorResponseFactory.js';
import responseFactory from '../utils/responseFactory.js';

const debug = debugLib('sernver:user-controller');

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
  if (error) {
    return errorResponseFactory(res, 400, error.details[0].message, {
      details: error.details,
    });
  }
  // Chesking if email is unique
  const emailExist = await User.findOne({ email: req.body.email }).exec();
  if (emailExist) {
    return errorResponseFactory(res, 400, 'Email or password is invalid');
  }
  // Create a new user
  const userDetails = new User(req.body);

  try {
    const saveUser = await userDetails.save();

    // Create and assign a token
    const token = signToken(saveUser._id);

    return responseFactory(res, 201, { token });
  } catch (err) {
    return errorResponseFactory(
      res,
      400,
      err?.message ?? 'Something went wrong, please try again'
    );
  }
};

//login a job seeker
export const loginUser = async (req, res) => {
  //VALIDATE THE DATA BEFORE USER
  const { error } = loginValidation(req.body);
  if (error) {
    return errorResponseFactory(res, 400, error.details[0].message, {
      details: error.details,
    });
  }
  //Checking if email exist
  const searchUser = await User.findOne({ email: req.body.email })
    .select({ password: 1 })
    .exec();

  debug('User email', searchUser);

  if (!searchUser) {
    return errorResponseFactory(res, 400, 'Email or password is wrong');
  }

  //Check if password is correct
  const validPassword = bcrypt.compareSync(
    req.body.password,
    searchUser.password
  );

  if (!validPassword) {
    return errorResponseFactory(res, 400, 'Email or password is wrong');
  }

  try {
    // Create and assign a token
    const token = signToken(searchUser._id);

    return responseFactory(res, 200, { token });
  } catch (err) {
    return errorResponseFactory(
      res,
      400,
      err?.message ?? 'Something went wrong, please try again'
    );
  }
};
