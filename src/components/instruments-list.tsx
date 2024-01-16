'use client';

import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const StyledInstrumentsList = styled('ul')`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  li {
    padding: 0.5rem;
  }
`;

function InstrumentsList({ children }: { children: ReactNode }) {
  return <StyledInstrumentsList>{children}</StyledInstrumentsList>;
}

export default InstrumentsList;
