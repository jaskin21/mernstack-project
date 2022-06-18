import jwt from 'jsonwebtoken';
import 'dotenv/config';
import errorResponseFactory from '../utils/errorResponseFactory.js';
import { responseStatus } from '../utils/responseFactory.js';

export default (req, res, next) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.token;

  if (!token) {
    return errorResponseFactory(
      res,
      responseStatus.FORBIDDEN,
      'A token is required for authentication'
    );
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decoded;
  } catch (err) {
    return errorResponseFactory(
      res,
      responseStatus.UNAUTHORIZED,
      'Invalid Token'
    );
  }

  return next();
};
