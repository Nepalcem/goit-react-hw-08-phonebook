import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { StyledEditIcon } from './EditIcon.styled';
import ModalForm from './ModalForm/ModalForm';
import CloseIcon from './CloseIcon/CloseIcon';
import { IconButton } from '@mui/material';
import { mainModalStyle, closeButtonStyle } from './modalStyles';




export default function EditModal({ id, name, number }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledEditIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={mainModalStyle}>
          <h2>Update Contact</h2>
          <ModalForm id={id} name={name} number={number} />
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            style={closeButtonStyle}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
}
