'use client';

import { ScreenSize } from '@/components/interfaces';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledPerson = styled('div')`
  text-align: center;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 1rem;

  @media ${ScreenSize.TABLET} {
    height: 100%;
    max-width: 200px;
  }

  @media ${ScreenSize.LAPTOPS} {
    max-width: 220px;
  }

  @media ${ScreenSize.LAPTOPL} {
    max-width: unset;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/pexels-eberhard-grossgasteiger-2310641.jpg');
    background-position: center;
    background-size: cover;
    filter: blur(1px) grayscale(30%);
    z-index: -1;
  }
`;

const StyledLinkList = styled('ul')`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

function Person() {
  return (
    <StyledPerson>
      <h2>Savitskaia Kseniia</h2>
      <h3>Web developer</h3>
      <StyledLinkList>
        <li>
          <Link href="/">LinkedIn</Link>
        </li>
        <li>
          <Link href="/">GitHub</Link>
        </li>
        <li>
          <Link href="/">Telegram</Link>
        </li>
        <li>
          <Link href="/">Instagram</Link>
        </li>
      </StyledLinkList>
    </StyledPerson>
  );
}

export default Person;
