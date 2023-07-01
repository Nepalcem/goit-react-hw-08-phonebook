import React from 'react';
import { useAuthorize } from 'components/hooks/useAuthorize';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authorize/operations';

function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuthorize();

  const handleLogout = () => dispatch(logOut());

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
