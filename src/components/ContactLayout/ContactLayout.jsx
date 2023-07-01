import React from 'react';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/contactsList/ContactsList';

function ContactLayout() {
  return (
    <div>
      <Form></Form>
      <Filter></Filter>
      <ContactsList></ContactsList>
    </div>
  );
}

export default ContactLayout;
