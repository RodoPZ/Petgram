import React from "react";
import { NavBar } from "./components/NavBar";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Home } from "./components/pages/Home";
import { Logo } from "./components/Logo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./components/pages/Detail";
import { Favs } from "./components/pages/Favs";
import { User } from "./components/pages/User";
import { NotRegisteredUser } from "./components/pages/NotRegisteredUser";

const UserLogged = ({ children }) => {
  return children({ isAuth: true });
};

export const APP = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <UserLogged>
          {({ isAuth }) =>
            isAuth ? (
              <Routes>
                <Route path="/favs" element={<Favs />} />
                <Route path="/user" element={<User />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/favs" element={<NotRegisteredUser />} />
                <Route path="/user" element={<NotRegisteredUser />} />
              </Routes>
            )
          }
        </UserLogged>
        <NavBar />
      </BrowserRouter>
    </>
  );
};
