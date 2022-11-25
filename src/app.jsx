import React, { useContext } from "react";
import { NavBar } from "./components/NavBar";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Home } from "./components/pages/Home";
import { Logo } from "./components/Logo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./components/pages/Detail";
import { Favs } from "./components/pages/Favs";
import { User } from "./components/pages/User";
import { NotRegisteredUser } from "./components/pages/NotRegisteredUser";
import { AppContext } from "./Context";

export const APP = () => {
  const Context = useContext(AppContext);
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/favs"
            element={Context.isAuth ? <Favs /> : <NotRegisteredUser />}
          />
          <Route
            path="/user"
            element={Context.isAuth ? <User /> : <NotRegisteredUser />}
          />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
};
