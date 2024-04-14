'use client';

import React from 'react';
import styled from 'styled-components';
import Tool from './tool';

const StyledToolsList = styled('ul')`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

function ToolsList({
  tools,
  updateList,
}: {
  tools: string[];
  updateList?: (item: string) => void;
}) {
  return (
    <StyledToolsList>
      {tools.map((item) => (
        <Tool key={item} onClick={updateList} source={item} />
      ))}
    </StyledToolsList>
  );
}

ToolsList.defaultProps = {
  updateList: () => {},
};

export default ToolsList;
