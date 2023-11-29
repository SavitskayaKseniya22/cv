'use client';

import React from 'react';
import styled from 'styled-components';
import { ScreenSize } from '@/components/interfaces';
import Header from './header';
import Person from './person';

const StyledLayout = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  @media ${ScreenSize.TABLET} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 90vh;
  }

  @media ${ScreenSize.LAPTOPS} {
    width: 70vw;
  }
`;

const StyledMain = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 2;
  background-color: #1c1e1f;
  padding: 1rem;

  @media ${ScreenSize.TABLET} {
    height: 90%;
  }
`;

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledLayout>
      <Header />
      <Person />
      <StyledMain>{children}</StyledMain>
    </StyledLayout>
  );
}

export default MainLayout;
