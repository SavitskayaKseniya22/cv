'use client';

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { SVGType, StyledLiWithMarker } from '@/components/styled-components';
import ContactsForm from './components/contacts-form';

const StyledMap = styled('div')`
  width: 100%;
  min-height: 5rem;
  flex-grow: 22;
  background-color: blue;
  flex-shrink: 0;
`;

const StyledContactList = styled('ul')<{ $type: SVGType; $color: string }>`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  li {
    ${StyledLiWithMarker}
  }
`;

function Contacts() {
  return (
    <>
      <h1>Contacts</h1>
      <hr />
      <StyledMap />
      <hr />
      <StyledContactList $type={SVGType.MIDDLE} $color="#d62222">
        <li>
          <AtSymbolIcon className="marker" />
          <Link href="mailto:Savitskaya.kseniya.22@gmail.com">
            Savitskaya.kseniya.22@gmail.com
          </Link>
        </li>
        <li>
          <PhoneIcon className="marker" />
          <Link href="telto:+0-000-000-00-00">+0-000-000-00-00</Link>
        </li>
      </StyledContactList>
      <hr />

      <ContactsForm />
    </>
  );
}

export default Contacts;
