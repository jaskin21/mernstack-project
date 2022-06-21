import AppContext from '../AppContext';
import { useContext, useEffect, useState } from 'react';
import useUser from './useUser';

const useUserInfo = () => {
  const appContext = useContext(AppContext);

  const { hasUserInfo, userInfo } = useUser();

  const [currentUserInfo, setUserInfo] = useState();

  useEffect(() => {
    if (hasUserInfo() && !appContext.user) {
      const { id, email, username } = userInfo;
      appContext.setUser(id, username, email);
    }
    if (appContext.user !== undefined) {
      setUserInfo(appContext.user);
    }
  }, []);

  return currentUserInfo;
};

export default useUserInfo;
