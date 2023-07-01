import React, { useEffect } from 'react';
import { useAuthorize } from 'components/hooks/useAuthorize';
import ContactLayout from 'components/ContactLayout/ContactLayout';
import { fetchContacts } from 'api-functions/api';
import { useDispatch } from 'react-redux';

function ContactsPage() {
  const { isLoggedIn } = useAuthorize();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>{isLoggedIn && <ContactLayout/>}</div>
  )
}

export default ContactsPage