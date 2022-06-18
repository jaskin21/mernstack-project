import jwt from 'jsonwebtoken';
import errorResponseFactory from '../utils/errorResponseFactory.js';
import { responseStatus } from '../utils/responseFactory.js';

export default (req, res, next) => {
  const token =
    req.token || // Check BearerTokenMiddleware what is this
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'];

  if (!token) {
    return errorResponseFactory(
      res,
      responseStatus.FORBIDDEN,
      'A token is required for authentication'
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    // TODO: Verify if the user.id exists in the Users collection

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
