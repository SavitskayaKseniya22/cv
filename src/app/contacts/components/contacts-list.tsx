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

  .contacts-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

function ContactsList() {
  return (
    <StyledContactList>
      <li className="contacts-item">
        <AtSymbolIcon className="styled-svg styled-svg_medium styled-svg_red" />
        <Link href="mailto:kseniia.savitskaia@gmail.com">
          kseniia.savitskaia@gmail.com
        </Link>
      </li>
      <li className="contacts-item">
        <PhoneIcon className="styled-svg styled-svg_medium styled-svg_red" />
        <Link href="tel:+79520056415">+7-952-005-64-15</Link>
      </li>
      <li className="contacts-item">
        <PhoneIcon className="styled-svg styled-svg_medium styled-svg_red" />
        <Link href="tel:+359876032638">+359-876-032-638</Link>
      </li>
    </StyledContactList>
  );
}

export default ContactsList;
