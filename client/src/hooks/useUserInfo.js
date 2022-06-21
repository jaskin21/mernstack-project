import axios from 'axios';
import { useState } from 'react';

const useUserInfo = () => {
  const userInfoKey = '_slvl_user_info';
  const PROFILE_URL = `${import.meta.env.VITE_BACKEND_URL}/user/me`;

  const [userInfo, _setUserInfo] = useState(() => {
    const item = window.localStorage.getItem(userInfoKey);

    return item ? JSON.parse(item) : undefined;
  });

  const storeUserInfo = (id, email, username) => {
    window.localStorage.setItem(
      userInfoKey,
      JSON.stringify({ id, email, username })
    );
  };

  const setUserInfo = (id, email, username) => {
    storeUserInfo(id, email, username);
    _setUserInfo({
      id,
      email,
      username,
    });
  };

  const removeUserInfo = () => {
    window.localStorage.removeItem(userInfoKey);
    _setUserInfo(undefined);
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
        alert('Something went wrong, please try again');

        return;
      }

      throw error;
    }
  };

  return {
    userInfo,
    setUserInfo,
    removeUserInfo,
    requestUserInfo,
    userInfoKey,
  };
};

export default useUserInfo;
