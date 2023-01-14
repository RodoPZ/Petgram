import React from "react";
import { SubmitButton } from "../SubmitButton";
import store from "../../store";
import { deactivateAuth } from "../../features/isAuth/isAuthSlice";
const User = () => {
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={() => store.dispatch(deactivateAuth())}>
        Cerrar sesión
      </SubmitButton>
    </>
  );
};

export default User;
