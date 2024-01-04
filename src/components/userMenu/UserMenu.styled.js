import styled from 'styled-components';
import { brownAccent } from 'utils/globalVariables';

export const UserMenuDiv = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-end;
`;

export const UserGreetingText = styled.p`
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 4px;
  color: ${brownAccent}
`;

export const LogOutButton = styled.button`
  background-color: rgb(238, 75, 43);
  color: white;
  padding: 4px 8px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-image: linear-gradient(to right, rgb(238, 75, 43), #ff5500);
  }
`;
