import React from 'react';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/contactsList/ContactsList';
import { FormBlock } from './ContactLayout.styled';

function ContactLayout() {
  return (
    <div>
      <FormBlock>
      <h1>PhoneBook</h1>
      <Form></Form>
      <Filter></Filter>
      </FormBlock>
      <ContactsList></ContactsList>
    </div>
  );
}

export default ContactLayout;
