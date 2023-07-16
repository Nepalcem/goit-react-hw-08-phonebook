import React from 'react';
import { useDispatch } from 'react-redux';
import { ContactsStyled } from './ContactsList.styled';
import StyledTrashIcon from './TrashIcon.styled';
import StyledEditIcon from './EditIcon.styled';
import { getError, getIsLoading, getVisibleContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { deleteContact } from 'api-functions/api';

const ContactsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const errorMessage = useSelector(getError);

  const contacts = useSelector(getVisibleContacts);
  return (
    <div className="contacts">
      <h2>Contacts List:</h2>
      {isLoading && !errorMessage && <b>Request in progress...</b>}
      <ContactsStyled>
        {contacts.map(({ name, id, number }) => (
          <li key={id} className="item">
            <div className="contact__data">
              <span className="name">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </span>
              <span className="phone">{number} </span>
            </div>
            <StyledEditIcon />
            <StyledTrashIcon
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            ></StyledTrashIcon>
          </li>
        ))}
      </ContactsStyled>
    </div>
  );
};

export default ContactsList;
