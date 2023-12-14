import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import styled from 'styled-components';

export const StyledProgressBar = styled('ul')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const StyledProgressBarItem = styled('li')<{ $filled: boolean }>`
  svg {
    width: 2rem;
    height: 2rem;
    color: ${(props) => (props.$filled ? '#d62222' : 'gray')};
  }
`;

function ProgressBar({ value, total }: { value: number; total: number }) {
  return (
    <StyledProgressBar>
      {new Array(total).fill(0).map((item, i) => {
        const key = Math.random();
        return (
          <StyledProgressBarItem key={key} $filled={i < value}>
            <EllipsisHorizontalCircleIcon />
          </StyledProgressBarItem>
        );
      })}
    </StyledProgressBar>
  );
}

export default ProgressBar;
