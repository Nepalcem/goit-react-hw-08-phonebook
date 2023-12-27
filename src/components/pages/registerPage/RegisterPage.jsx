import React from 'react';
import { ContentBlock } from 'components/ContactLayout/ContactLayout.styled';
import SignupForm from 'components/SignupForm/SignupForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authorize/operations';

function RegisterPage() {
  
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const userObject = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    dispatch(register(userObject));
    e.target.reset();
  };


  return (
    <ContentBlock>
      <h2>Registration Page</h2>
      <SignupForm isLogin={false} onSubmit={handleSubmit}/>
    </ContentBlock>
  );
}

export default RegisterPage;
