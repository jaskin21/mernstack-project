import { createContext } from 'react';

/**
 * @typedef {object} User
 * @property {string} id
 * @property {string} username
 * @property {string} email
 */

/**
 * @property {User} user
 * @property {string} token
 */
const appContext = {
  user: undefined,
  token: undefined,
  setUser(id, username, email) {
    this.user = {
      ...this.user,
      id,
      username,
      email,
    };
  },
  setToken(token) {
    this.token = token;
  },
};

const AppContext = createContext(appContext);

export const defaultAppContext = appContext;

export default AppContext;
