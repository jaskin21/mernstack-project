import UserModel from "../model/UserModel.js";
import errorResponseFactory from "../utils/errorResponseFactory.js";
import responseFactory, { responseStatus } from "../utils/responseFactory.js";

//get all the user
export const listOfUsers = async (req, res) => {
  try {
    const userList = await UserModel.find();
    return responseFactory(res, 200, { userList });
  } catch (err) {
    return errorResponseFactory(
      res,
      responseStatus.BAD_REQUEST,
      err?.message ?? "Something went wrong, please try again"
    );
  }
};

// select a user
export const selectedUser = async (req, res) => {
  try {
    const selectUser = await UserModel.find({ _id: req.params.id });
    return responseFactory(res, 200, { selectUser });
  } catch (err) {
    return errorResponseFactory(
      res,
      responseStatus.BAD_REQUEST,
      err?.message ?? "Something went wrong, please try again"
    );
  }

};
