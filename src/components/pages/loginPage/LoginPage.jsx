import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authorize/operations';
import {
  RegisterForm,
  FormTextField,
  FormButton,
} from '../registerPage/RegisterPage.styled';
import { ContentBlock } from 'components/ContactLayout/ContactLayout.styled';

function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const userLogInObject = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(logIn(userLogInObject));
    e.target.reset();
  };
  return (
    <ContentBlock>
      <h2>Login Page</h2>
      <RegisterForm onSubmit={handleSubmit}>
        <FormTextField
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          required
        />
        <FormTextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          required
        />

        <FormButton type="submit">Log In</FormButton>
      </RegisterForm>
    </ContentBlock>
  );
}

export default LoginPage;
