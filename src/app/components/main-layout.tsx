'use client';

import React from 'react';
import styled from 'styled-components';
import { ScreenSize } from '@/app/interfaces';
import Header from './header';
import Person from './person';

const StyledLayout = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100svh;

  @media ${ScreenSize.TABLET} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 95vh;
  }

  @media ${ScreenSize.LAPTOPS} {
    width: 70vw;
  }

  @media ${ScreenSize.LAPTOPXL} {
    width: 60vw;
  }
`;

const StyledMain = styled('main')`
  background-color: #1c1e1f;
  flex-grow: 5;
  overflow: auto;
  display: flex;

  @media ${ScreenSize.TABLET} {
    height: 95%;
  }

  @media ${ScreenSize.LAPTOPXL} {
    height: 75%;
  }
`;

export const StyledMainContent = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
  color: white;
  position: relative;
  overflow: auto;
  width: 100%;

  hr {
    width: 50%;
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
