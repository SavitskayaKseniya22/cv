'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

export const StyledInstrument = styled('li')<{ $selected: boolean }>`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${(props) => (props.$selected ? '#d62222' : 'white')};
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
      {children}
    </StyledInstrument>
  );
}

export default Instrument;
