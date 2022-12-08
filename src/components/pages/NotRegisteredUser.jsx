import React, { useContext } from "react";
import { AppContext } from "../../Context";
import { UserForm } from "../UserForm";
import { useRegisterMutation } from "../hooks/useRegisterMutation";
import { useLoginMutation } from "../hooks/useLoginMutation";

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);

  return (
    <>
      {(() => {
        const { Mutation, loading, error } = useRegisterMutation();
        const registerOnSubmit = ({ email, password }) => {
          const input = { email, password };
          const variable = { input };
          Mutation({ variables: variable }).then(({ data }) => {
            const { signup } = data;
            activateAuth(signup);
          });
        };
        const ErrorMsg = error && "El usuario ya existe o hay un problema.";
        return (
          <UserForm
            error={ErrorMsg}
            loading={loading}
            title="Registrarse"
            onSubmit={registerOnSubmit}
          />
        );
      })()}
      {(() => {
        const { Mutation, loading, error } = useLoginMutation();
        const loginOnSubmit = ({ email, password }) => {
          const input = { email, password };
          const variable = { input };
          Mutation({ variables: variable }).then(({ data }) => {
            const { login } = data;
            activateAuth(login);
          });
        };

        const ErrorMsg =
          error && "La contraseña no es correcta o el usuario no existe";
        return (
          <UserForm
            error={ErrorMsg}
            loading={loading}
            title="Iniciar Sesión"
            onSubmit={loginOnSubmit}
          />
        );
      })()}
    </>
  );
};

export default NotRegisteredUser;
