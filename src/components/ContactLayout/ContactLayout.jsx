import React from 'react';
import Form from 'components/AddContactForm/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/contactsList/ContactsList';
import { ContentBlock } from './ContactLayout.styled';

function ContactLayout() {
  return (
    <div>
      <ContentBlock>
      <h1>PhoneBook</h1>
      <Form></Form>
      <Filter></Filter>
      </ContentBlock>
      <ContactsList></ContactsList>
    </div>
  );
}

export default ContactLayout;
