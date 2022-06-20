import AppContext from '../AppContext';
import { useContext, useEffect, useState } from 'react';

const useUserInfo = () => {
  const appContext = useContext(AppContext);

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (appContext.user !== undefined) {
      setUserInfo(appContext.user);
    }
  }, []);

  return userInfo;
};

export default useUserInfo;
