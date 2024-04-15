/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import React from 'react';
import ArrowUturnLeftIcon from '@heroicons/react/24/outline/ArrowUturnLeftIcon';
import { useRouter } from 'next/navigation';
import { StyledMainContent } from './components/main-layout';

function NotFound() {
  const router = useRouter();
  return (
    <StyledMainContent>
      <h1>Not Found</h1>
      <button type="button" onClick={() => router.back()}>
        <ArrowUturnLeftIcon className="styled-svg styled-svg_big styled-svg_white" />
      </button>
    </StyledMainContent>
  );
}

export default NotFound;
