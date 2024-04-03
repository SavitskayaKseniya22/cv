import { ScreenSize } from '@/app/interfaces';
import { StyledInstrumentsList } from '@/components/instruments-list';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const StyledProjectsList = styled('ul')`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto 0;

  @media ${ScreenSize.TABLET} {
    gap: 1rem;
  }

  @media ${ScreenSize.LAPTOPL} {
    gap: 1.5rem;
  }
`;

function ProjectsList({ children }: { children: ReactNode }) {
  return <StyledInstrumentsList>{children}</StyledInstrumentsList>;
}

export default ProjectsList;
