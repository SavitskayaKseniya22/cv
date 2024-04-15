'use client';

import React, { useEffect } from 'react';
import { StyledMainContent } from './components/main-layout';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StyledMainContent>
      <h1>Something went wrong!</h1>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </StyledMainContent>
  );
}
