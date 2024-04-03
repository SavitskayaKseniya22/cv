'use client';

import { SVGType } from '@/app/interfaces';
import {  StyledLiWithMarker } from '@/components/styled-components';
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
`;

function ContactsList() {
  return (
    <StyledContactList>
      <StyledLiWithMarker $type={SVGType.MIDDLE} $color="#d62222">
        <AtSymbolIcon className="marker" />
        <Link href="mailto:kseniia.savitskaia@gmail.com">
          kseniia.savitskaia@gmail.com
        </Link>
      </StyledLiWithMarker>
      <StyledLiWithMarker $type={SVGType.MIDDLE} $color="#d62222">
        <PhoneIcon className="marker" />
        <Link href="telto:+79520056415">+7-952-005-64-15</Link>
      </StyledLiWithMarker>
      <StyledLiWithMarker $type={SVGType.MIDDLE} $color="#d62222">
        <PhoneIcon className="marker" />
        <Link href="telto:+359876032638">+359-876-032-638</Link>
      </StyledLiWithMarker>
    </StyledContactList>
  );
}

export default ContactsList;
