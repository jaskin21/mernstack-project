import { createContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // fetch user id details
  const [userId, setUserId] = useState({});

  return (
    <UserContext.Provider
      value={{
        userId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
