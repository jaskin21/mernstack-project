import { useState } from 'react';

const useUserToken = () => {
  const tokenKey = '_slvl_user_token';

  const [token, _setToken] = useState(() =>
    window.localStorage.getItem(tokenKey)
  );

  const storeToken = (token) => {
    window.localStorage.setItem(tokenKey, token);
  };

  const setToken = (token) => {
    storeToken(token);
    _setToken(token);
  };

  const removeToken = () => {
    window.localStorage.removeItem(tokenKey);
    _setToken(undefined);
  };

  return {
    token,
    tokenKey,
    setToken,
    removeToken,
  };
};

export default useUserToken;
