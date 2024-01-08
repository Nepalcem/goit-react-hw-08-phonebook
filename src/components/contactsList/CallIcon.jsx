import React from 'react';
import { StyledCallIcon } from './TrashIcon.styled';

export default function CallIcon({ href }) {
  return (
    <a href={`tel:${href}`}>
      <StyledCallIcon />
    </a>
  );
}
