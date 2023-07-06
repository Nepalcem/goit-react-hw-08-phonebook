import styled from 'styled-components';

export const UserMenuDiv = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-end;
`;

export const UserGreetingText = styled.p`
  font-weight: 500;
`;

export const LogOutButton = styled.button`
  background-color: rgb(238, 75, 43);
  color: white;
  padding: 4px 8px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-image: linear-gradient(to right, rgb(238, 75, 43), #ff5500);
  }
`;
