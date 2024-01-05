import React, { useState } from 'react';
import { ModalFormStyled } from './ModalForm.styled';
import { FaPlus } from 'react-icons/fa';
// import { LuLoader2 } from 'react-icons/lu';
// import { useDispatch } from 'react-redux';
import { FormTextField } from 'components/pages/registerPage/RegisterPage.styled';

const ModalForm = ({id, name, number}) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);
//   const dispatch = useDispatch();



  const handleChange = e => {
    if (e.currentTarget.name === 'name') {
      setContactName(e.currentTarget.value);
    } else {
      setContactNumber(e.currentTarget.value);
    }
  };

//   const addContactItem = (name, number) => {
//     const existingContact = contacts.find(
//       contact => name.toLowerCase() === contact.name.toLowerCase()
//     );

//     if (existingContact) {
//       return null;
//     }
//     const userObj = {
//       name,
//       number,
//     };
//     return userObj;
//   };

//   const submitHandler = e => {
//     e.preventDefault();
//     const newContact = addContactItem(name, number);
//     if (newContact === null) {
//       return alert(`${name} is already in contacts`);
//     } else {
//       dispatch(addContact(addContactItem(name, number)));
//       setName('');
//       setNumber('');
//     }
//   };

  return (
    <ModalFormStyled /*onSubmit={submitHandler} */>
      <FormTextField
        type="text"
        name="name"
        pattern="^[A-Za-z\u0080-\uFFFF ']+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        value={contactName}
        autoComplete="off"
        label="Name"
        variant="outlined"
      />
      <FormTextField
        type="tel"
        name="number"
        pattern="^(\+?[0-9.\(\)\-\s]*)$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={contactNumber}
        autoComplete="off"
        label="Phone"
        variant="outlined"
      />

      <button type="submit" /* disabled={isAddContactLoading} */>
        {/* {isAddContactLoading ? (
          <LuLoader2 className="loading-icon"></LuLoader2>
        ) : ( */}
        <FaPlus></FaPlus>
        {/* )} */}
        Edit Contact
      </button>
    </ModalFormStyled>
  );
};

export default ModalForm;
