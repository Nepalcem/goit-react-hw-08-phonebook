import React, { useState } from 'react';

import { RegisterForm, FormTextField, FormButton } from './SignupForm.styled';

export default function SignupForm({ isLogin, onSubmit }) {



  return (
    <RegisterForm onSubmit={onSubmit}>
      {!isLogin && (
        <FormTextField
          type="text"
          name="name"
          label="Username"
          variant="outlined"
          required
        />
      )}

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
      <FormButton type="submit">{isLogin ? 'Login' : 'Register'}</FormButton>
    </RegisterForm>
  );
}
