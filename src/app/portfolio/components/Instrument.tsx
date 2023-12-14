'use client';

import { BackspaceIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import styled from 'styled-components';

export const StyledInstrument = styled('li')<{ $selected: boolean }>`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: ${(props) =>
    props.$selected ? 'rgba(38, 70, 83)' : 'transparent'};

  svg {
    color: white;
    width: ${(props) => (props.$selected ? '1.5rem;' : '0px')};
  }
`;

function Instrument({
  children,
  addToClick,
}: {
  children: React.ReactNode;
  addToClick: () => void;
}) {
  const [selected, setSelected] = useState(false);

  return (
    <StyledInstrument
      $selected={selected}
      onClick={() => {
        setSelected((a) => !a);
        addToClick();
      }}
    >
      <BackspaceIcon />
      {children}
    </StyledInstrument>
  );
}

export default Instrument;
