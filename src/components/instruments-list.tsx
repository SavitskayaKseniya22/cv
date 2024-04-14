'use client';

import Instrument from '@/app/portfolio/components/Instrument';
import React from 'react';
import styled from 'styled-components';

const StyledInstrumentsList = styled('ul')`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

function InstrumentsList({
  instruments,
  updateList,
}: {
  instruments: string[];
  updateList?: (item: string) => void;
}) {
  return (
    <StyledInstrumentsList>
      {instruments.map((item) => (
        <Instrument key={item} onClick={updateList} source={item} />
      ))}
    </StyledInstrumentsList>
  );
}

InstrumentsList.defaultProps = {
  updateList: () => {},
};

export default InstrumentsList;
