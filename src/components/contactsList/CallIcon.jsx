import React from 'react';
import { StyledCallIcon } from '../EditModal/EditIcon.styled';

export default function CallIcon({ href }) {
  return (
    <a href={`tel:${href}`}>
      <StyledCallIcon />
    </a>
  );
}
