import React from 'react';
import { NavLink } from 'react-router-dom';

function LoginMenu() {
  return (
    <div>
      <NavLink to="/register"> Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
}

export default LoginMenu;
