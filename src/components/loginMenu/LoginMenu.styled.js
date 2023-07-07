import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

export const LoginLink = styled(NavLink)`
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  background-color: #89cff0;
  text-decoration: none;
  display: flex;
  align-items: baseline;
  line-height: unset;
  & span {
    margin-left: 20px;
  }
  &:hover {
    background-color: rgb(81, 203, 238);
    box-shadow: 0 0 10px rgba(81, 203, 238, 0.8),
      0 0 20px rgba(81, 203, 238, 0.6), 0 0 30px rgba(81, 203, 238, 0.4);
  }
`;

export const RegisterIcon = styled(FaUserPlus)`
  position: absolute;
  margin-top: 1px;
`;

export const LoginIcon = styled(FaSignInAlt)`
  position: absolute;
  margin-top: 1px;
`;

export const LoginMenuDiv = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;
