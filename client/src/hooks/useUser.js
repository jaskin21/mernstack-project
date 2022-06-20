import axios from 'axios';
import { useState } from 'react';

const useUser = () => {
  const TOKEN_KEY = '_slvl_user_token';
  const USER_INFO_KEY = '_slvl_user_info';
  const PROFILE_URL = `${import.meta.env.VITE_BACKEND_URL}/user/me`;

  const [token, setToken] = useState(() => {
    return window.localStorage.getItem(TOKEN_KEY);
  });

  const storeToken = (token) => {
    if (token) {
      window.localStorage.setItem(TOKEN_KEY, token);
      setToken(token);
    }
  };

  const [userInfo, setUserInfo] = useState(() => {
    try {
      const user = window.localStorage.getItem(USER_INFO_KEY);

      return user ? JSON.parse(user) : undefined;
    } catch (error) {
      return undefined;
    }
  });

  const storeUserInfo = (id, username, email) => {
    if (id && username && email) {
      setUserInfo({ id, email, username });

      window.localStorage.setItem(
        USER_INFO_KEY,
        JSON.stringify({ id, email, username })
      );
    }
  };

  const requestUserInfo = async (token) => {
    try {
      const response = await axios.post(PROFILE_URL, undefined, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.userInfo;
    } catch (error) {
      if (error.isAxiosError) {
        console.log(error);
      }

      throw error;
    }
  };

  const requestAndStoreUserInfo = async (token) => {
    const { id, email, username } = await requestUserInfo(token);

    storeUserInfo(id, username, email);
  };

  const hasToken = () => {
    return !!token;
  };

  const hasUserInfo = () => {
    return !!userInfo;
  };

  return {
    token,
    storeToken,
    userInfo,
    storeUserInfo,
    hasToken,
    hasUserInfo,
    requestAndStoreUserInfo,
    requestUserInfo,
  };
};

export default useUser;
