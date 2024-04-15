import {
  BarsArrowUpIcon,
  BarsArrowDownIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import styled from 'styled-components';
import { SortType } from './portfolio-reducer';

const StyledSortButton = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

function SortButton({
  sort,
  onClick,
}: {
  sort: SortType;
  onClick: () => void;
}) {
  return (
    <StyledSortButton type="button" onClick={onClick}>
      Sort by date
      <BarsArrowUpIcon
        className={`styled-svg styled-svg_big ${
          sort === SortType.DOWN ? 'styled-svg_red' : 'styled-svg_white'
        }`}
      />
      <BarsArrowDownIcon
        className={`styled-svg styled-svg_big ${
          sort === SortType.UP ? 'styled-svg_red' : 'styled-svg_white'
        }`}
      />
    </StyledSortButton>
  );
}

export default SortButton;
