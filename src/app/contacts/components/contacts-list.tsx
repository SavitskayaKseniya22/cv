'use client';

import { SVGType, StyledLiWithMarker } from '@/components/styled-components';
import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

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

function ContactsList() {
  return (
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
  );
}

export default ContactsList;
