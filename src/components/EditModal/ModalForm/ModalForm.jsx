import React, { useState } from 'react';
import { ModalFormStyled } from './ModalForm.styled';
import { FaCheck } from 'react-icons/fa';
import { LuLoader2 } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { FormTextField } from 'components/pages/registerPage/RegisterPage.styled';
import { toast } from 'react-toastify';
import { updateContact } from 'api-functions/api';
import { getIsAddContactPending } from 'redux/selectors';

const ModalForm = ({ id, name, number }) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);
  const dispatch = useDispatch();
   const isAddContactLoading = useSelector(getIsAddContactPending);

  const handleChange = e => {
    if (e.currentTarget.name === 'name') {
      setContactName(e.currentTarget.value);
    } else {
      setContactNumber(e.currentTarget.value);
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    if (contactName.trim().length === 0 || contactNumber.trim().length === 0) {
      toast.warning('Name or phone must not be empty!');
      return;
    }
    const updatedContact = {
      id,
      name: contactName.trim(),
      number: contactNumber.trim(),
    };

    dispatch(updateContact(updatedContact));
  };

  return (
    <ModalFormStyled onSubmit={submitHandler}>
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

      <button type="submit" disabled={isAddContactLoading} >
        {isAddContactLoading ? (
          <LuLoader2 className="loading-icon"></LuLoader2>
        ) :
          <FaCheck />
        }
        Confirm
      </button>
    </ModalFormStyled>
  );
};

export default ModalForm;
