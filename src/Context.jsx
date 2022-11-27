import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return sessionStorage.getItem("token");
  });
  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      sessionStorage.setItem("token", token);
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.element,
};
