import React, { useContext, lazy, Suspense } from "react";
import { NavBar } from "./components/NavBar";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Home } from "./components/pages/Home";
import { Logo } from "./components/Logo";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { NotFoud } from "./components/pages/NotFound";
import { AppContext } from "./Context";
const Detail = lazy(() => import("./components/pages/Detail"));
const Favs = lazy(() => import("./components/pages/Favs"));
const User = lazy(() => import("./components/pages/User"));
const NotRegisteredUser = lazy(() =>
  import("./components/pages/NotRegisteredUser")
);

export const APP = () => {
  const Context = useContext(AppContext);
  return (
    <Suspense fallback={<div />}>
      <HashRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route
            path="/favs"
            element={Context.isAuth ? <Favs /> : <NotRegisteredUser />}
          />
          <Route
            path="/user"
            element={Context.isAuth ? <User /> : <NotRegisteredUser />}
          />
          <Route
            path="/login"
            element={
              Context.isAuth ? <Navigate to="/" /> : <NotRegisteredUser />
            }
          />
          <Route path="*" element={<NotFoud />} />
        </Routes>
        <NavBar />
      </HashRouter>
    </Suspense>
  );
};
