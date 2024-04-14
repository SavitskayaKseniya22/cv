'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInstrument = styled('li')<{ $selected: boolean }>`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${(props) => (props.$selected ? '#d62222' : 'white')};
`;

function Instrument({
  onClick,
  source,
}: {
  source: string;
  onClick?: (item: string) => void;
}) {
  const [selected, setSelected] = useState(false);

  return (
    <StyledInstrument
      $selected={selected}
      onClick={() => {
        if (onClick) {
          setSelected((a) => !a);
          onClick(source);
        }
      }}
    >
      {source}
    </StyledInstrument>
  );
}

Instrument.defaultProps = {
  onClick: () => {},
};

export default Instrument;
