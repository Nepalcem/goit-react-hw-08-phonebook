import styled from 'styled-components';
import { desktop } from 'utils/globalVariables';

export const StyledHomeImg = styled.img`
  height: auto;
  max-width: 100%;
  @media screen and (min-width: ${desktop}) {
    max-width: 50%;
  }
  display: inline-block;
  border-radius: 8px;
`;

export const StyledHomeText = styled.div`
  text-align: justify;
  @media screen and (min-width: ${desktop}) {
    max-width: 50%;
  }
  text-indent: 15px;
`;

export const StyledHomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${desktop}) {
    flex-direction: row;
  }
  gap: 15px;
  margin-bottom: 20px;
`;

export const StyledHomeList = styled.ul`
  list-style: none;
`;
