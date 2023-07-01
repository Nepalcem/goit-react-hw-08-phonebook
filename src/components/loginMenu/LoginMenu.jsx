import React from 'react';
import { NavLink } from 'react-router-dom';

function LoginMenu() {
  return (
    <div>
      <NavLink to="/register"> Register</NavLink>
      <button type="button">Log In</button>
    </div>
  );
}

export default LoginMenu;
