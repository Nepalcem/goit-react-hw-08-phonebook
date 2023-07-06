import React from 'react';
import { useAuthorize } from 'components/hooks/useAuthorize';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authorize/operations';
import { UserGreetingText, LogOutButton, UserMenuDiv } from './UserMenu.styled';
import { FiLogOut } from 'react-icons/fi';

function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuthorize();

  const handleLogout = () => dispatch(logOut());

  return (
    <UserMenuDiv>
      <UserGreetingText>Welcome, {user.name}</UserGreetingText>
      <LogOutButton type="button" onClick={handleLogout}>
        <FiLogOut /> LOGOUT
      </LogOutButton>
    </UserMenuDiv>
  );
}

export default UserMenu;
