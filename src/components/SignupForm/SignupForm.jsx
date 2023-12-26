import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authorize/operations';
// import * as Yup from 'yup';
import { RegisterForm, FormTextField, FormButton } from './SignupForm.styled';

export default function SignupForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const userObject = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    dispatch(register(userObject));
    e.target.reset();
  };
  return (
    <RegisterForm onSubmit={handleSubmit}>
      <FormTextField
        type="text"
        name="name"
        label="Username"
        variant="outlined"
        required
      />

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
      <FormButton type="submit">Register</FormButton>
    </RegisterForm>
  );
}
