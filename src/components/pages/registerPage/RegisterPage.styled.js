import styled from 'styled-components';
import { TextField } from '@mui/material';

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormTextField = styled(TextField)`
  .MuiInputLabel-root:not([data-shrink='true']) {
    transform: translate(14px, 10px) scale(1);
    font-size: 14px;
  }
  /* & label.Mui-focused { top:0;} */
  & input {
    height: 18px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
`;
