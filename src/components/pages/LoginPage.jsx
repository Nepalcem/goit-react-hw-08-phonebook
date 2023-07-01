import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authorize/operations';

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
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
