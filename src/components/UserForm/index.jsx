import React from "react";
import PropTypes from "prop-types";
import { useInputValue } from "../hooks/useInputValue";
import { Form, Input, Title, Error } from "../UserForm/styles";
import { Spinner } from "../../styles/component";
import { SubmitButton } from "../SubmitButton";

export const UserForm = ({ loading, onSubmit, title, error }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form disabled={loading} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={loading} placeholder="Email" {...email} />
        <Input
          disabled={loading}
          placeholder="Password"
          type="password"
          {...password}
        />
        <SubmitButton disabled={loading}>
          {!loading ? title : <Spinner size={"20px"} />}
        </SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
};
