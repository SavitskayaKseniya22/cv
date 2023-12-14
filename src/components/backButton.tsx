/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const StyledBackButton = styled('button')`
  color: white;
  position: absolute;
  bottom: 1rem;
  left: 1rem;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

function BackButton() {
  const router = useRouter();

  return (
    <StyledBackButton type="button" onClick={() => router.back()}>
      <ArrowUturnLeftIcon />
    </StyledBackButton>
  );
}

export default BackButton;
