import React, { createContext, useState } from "react";
export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true);
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
