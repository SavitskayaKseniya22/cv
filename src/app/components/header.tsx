/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import React from 'react';

import {
  UserIcon,
  ChatBubbleLeftIcon,
  BriefcaseIcon,
  FolderIcon,
  FolderArrowDownIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import styled from 'styled-components';
import { ScreenSize } from '@/components/interfaces';

const StyledHeader = styled('header')`
  display: flex;
  background-color: #1c1e1f;
  color: white;
  padding: 1rem;

  @media ${ScreenSize.TABLET} {
    flex-direction: column;
    height: 60%;
  }
`;

const StyledNavigation = styled('ul')`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  flex-grow: 2;

  @media ${ScreenSize.TABLET} {
    flex-direction: column;
    font-size: 1rem;
    justify-content: center;
  }
`;

const StyledNavigationItem = styled('li')`
  @media ${ScreenSize.TABLET} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media ${ScreenSize.LAPTOPS} {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const StyledNavigationLink = styled(Link)`
  span {
    display: none;
  }

  svg {
    width: 1.8rem;
    height: 2rem;
    flex-shrink: 0;
  }

  @media ${ScreenSize.TABLET} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  @media ${ScreenSize.LAPTOPL} {
    span {
      display: inline;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledNavigation>
        <StyledNavigationItem>
          <StyledNavigationLink href="/" title="About Me">
            <UserIcon />
            <span>About Me</span>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink href="portfolio" title="Potfolio">
            <FolderIcon />
            <span>Potfolio</span>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink href="previous-jobs" title="Previous Jobs">
            <BriefcaseIcon />
            <span>Previous Jobs</span>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink href="contacts" title="Contacts">
            <ChatBubbleLeftIcon />
            <span>Contacts</span>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink href="resume" title="Resume">
            <FolderArrowDownIcon />
            <span>Resume</span>
          </StyledNavigationLink>
        </StyledNavigationItem>
      </StyledNavigation>
    </StyledHeader>
  );
}

export default Header;
