import React from 'react';
import { useDispatch } from 'react-redux';
import { ContactsStyled } from './ContactsList.styled';
import { StyledTrashIcon } from './TrashIcon.styled';
import { getError, getIsLoading, getVisibleContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { deleteContact } from 'api-functions/api';
import EditModal from 'components/EditModal/EditModal';
import CallIcon from './CallIcon';

const ContactsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const errorMessage = useSelector(getError);
  const contacts = useSelector(getVisibleContacts);

  const handleDelete = (id, name) => {
     const isConfirmed = window.confirm(
       `Do you want to delete ${name} from your contacts?`
     );

     if (isConfirmed) {
       dispatch(deleteContact(id));
     }
  }
  
  return (
    <div className="contacts">
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
            <CallIcon href={number} />
            <EditModal id={id} name={name} number={number} />
            <StyledTrashIcon
              onClick={() => {
                handleDelete(id, name)
              }}
            ></StyledTrashIcon>
          </li>
        ))}
      </ContactsStyled>
    </div>
  );
};

export default ContactsList;
