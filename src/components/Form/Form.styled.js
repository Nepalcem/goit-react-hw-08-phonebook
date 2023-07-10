import styled from 'styled-components';

export const FormStyled = styled.form`
  margin-bottom: 20px;

  & .form__inputs {
    display: flex;
    gap: 15px;
    align-items: baseline;
    flex-direction: column;
    border-radius: 8px;
    padding: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  & .form__inputs p {
    display: inline-block;
    margin-right: 10px;
  }


  & .form__inputs button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    font-weight: 500;
    background-color: rgb(81, 203, 238);
    color: white;
    padding: 0px 15px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 36px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & .loading-icon {
    animation: animate 2s infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  & .form__inputs button:hover {
    box-shadow: 0 0 10px rgba(81, 203, 238, 0.8),
      0 0 20px rgba(81, 203, 238, 0.6), 0 0 30px rgba(81, 203, 238, 0.4);
  }
`;
