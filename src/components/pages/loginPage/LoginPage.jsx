import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authorize/operations';

import { ContentBlock } from 'components/ContactLayout/ContactLayout.styled';
import SignupForm from 'components/SignupForm/SignupForm';
import AllreadyAccount from 'components/AlreadyAccountBlock/AllreadyAccount';

function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const { email, password } = e;
    const loginDataObject = { email, password };
    dispatch(logIn(loginDataObject));
  };
  return (
    <ContentBlock>
      <h2>Login to your Account</h2>
      <SignupForm isLogin={true} onSubmit={handleSubmit} />
      <AllreadyAccount isLogin={true}/>
    </ContentBlock>
  );
}

export default LoginPage;
