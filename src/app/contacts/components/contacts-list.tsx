'use client';

import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledContactList = styled('ul')`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & > li {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: #d62222;
      flex-shrink: 0;
    }
  }
`;

function ContactsList() {
  return (
    <StyledContactList>
      <li>
        <AtSymbolIcon className="marker" />
        <Link href="mailto:kseniia.savitskaia@gmail.com">
          kseniia.savitskaia@gmail.com
        </Link>
      </li>
      <li>
        <PhoneIcon className="marker" />
        <Link href="tel:+79520056415">+7-952-005-64-15</Link>
      </li>
      <li>
        <PhoneIcon className="marker" />
        <Link href="tel:+359876032638">+359-876-032-638</Link>
      </li>
    </StyledContactList>
  );
}

export default ContactsList;
