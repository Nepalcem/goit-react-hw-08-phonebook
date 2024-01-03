import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { tablet } from 'utils/deviceBreakPoints';
import { desktop } from 'utils/deviceBreakPoints';

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
  width: 480px;
  @media screen and (min-width: ${tablet}) and (max-width: ${desktop}) {
    width: 600px;
  }
  @media screen and (min-width: ${desktop}) {
    width: 960px;
  }
`;

export const Header = styled.header`
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  ${props =>
    props.alignItemsBaseline &&
    css`
      align-items: baseline;
    `};
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const NavigationLink = styled(NavLink)`
  max-height: 24px;
  display: block;
  padding: 12px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: rgb(81, 203, 238);
  transition: all 0.25s ease-in-out;
  &:nth-child(n+2) {
    margin-right: auto;
  }
  &:hover {
    box-shadow: 0 0 10px rgba(81, 203, 238, 0.8),
      0 0 20px rgba(81, 203, 238, 0.6), 0 0 30px rgba(81, 203, 238, 0.4);
  }
  &.active {
    text-decoration: underline;
  }
`;