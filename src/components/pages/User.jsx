import React, { useContext } from "react";
import { AppContext } from "../../Context";
import { SubmitButton } from "../SubmitButton";
const User = () => {
  const { removeAuth } = useContext(AppContext);
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  );
};

export default User;
