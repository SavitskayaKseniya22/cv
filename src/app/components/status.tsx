'use client';

import { ScreenSize } from '@/app/interfaces';
import React from 'react';
import styled from 'styled-components';

const StyledStatus = styled('div')`
  display: none;

  @media ${ScreenSize.TABLET} {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: white;
  }
`;

const StyledStatusLine = styled('span')`
  animation-name: opacity;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @keyframes opacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default function Status() {
  return (
    <StyledStatus>
      Status: <StyledStatusLine>Looking for a job</StyledStatusLine>
    </StyledStatus>
  );
}
