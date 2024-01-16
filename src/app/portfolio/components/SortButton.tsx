import {
  BarsArrowUpIcon,
  BarsArrowDownIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import styled from 'styled-components';
import { SortType } from './portfolioReducer';

export const StyledSortButton = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: white;
  align-self: flex-end;
  transition: all 1s ease-out;
  order: 6;
  svg {
    width: 2rem;
    height: 2rem;
    transition: all 1s ease-out;

    &.active {
      color: #d62222;
    }
    &.inactive {
      color: gray;
    }
  }

  &:hover {
    svg {
      &.active {
        color: gray;
      }
      &.inactive {
        color: #d62222;
      }
    }
  }
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
        className={sort === SortType.DOWN ? 'active' : 'inactive'}
      />
      <BarsArrowDownIcon
        className={sort === SortType.UP ? 'active' : 'inactive'}
      />
    </StyledSortButton>
  );
}

export default SortButton;
