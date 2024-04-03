/* eslint-disable react/require-default-props */

'use client';

import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import React from 'react';
import styled from 'styled-components';

export const StyledComplexity = styled('div')`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  align-items: center;
  justify-content: center;

  svg {
    color: #d62222;
  }

  &.complexity_in-project {
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  &.complexity_in-project-list {
    bottom: 0.5rem;
    right: 0.5rem;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

function Complexity({
  complexity,
  className,
}: {
  complexity: number;
  className?: string;
}) {
  return (
    <StyledComplexity title="Complexity" className={className}>
      <PuzzlePieceIcon />
      {complexity}
    </StyledComplexity>
  );
}

export default Complexity;
