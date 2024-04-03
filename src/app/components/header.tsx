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
import { ScreenSize } from '@/app/interfaces';
import { usePathname } from 'next/navigation';

const StyledHeader = styled('header')`
  display: flex;
  background-color: #1c1e1f;
  color: white;
  padding: 1rem;

  @media ${ScreenSize.TABLET} {
    flex-direction: column;
    height: 60%;
  }

  @media ${ScreenSize.LAPTOPL} {
    padding: 1.25rem;
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
    justify-content: center;
  }

  @media ${ScreenSize.LAPTOPL} {
    gap: 1.25rem;
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
    justify-content: flex-start;
  }
`;

const StyledNavigationLink = styled(Link)`
  &.navigation-link_active {
    color: #d62222;
  }

  &.navigation-link_resume {
    svg {
      color: #d62222;
    }
  }

  span {
    display: none;
  }

  svg {
    width: 2rem;
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
      white-space: nowrap;
    }
  }
`;

function Header() {
  const pathname = usePathname();

  return (
    <StyledHeader>
      <StyledNavigation>
        <StyledNavigationItem>
          <StyledNavigationLink
            href="/"
            title="About Me"
            className={`${pathname === '/' ? 'navigation-link_active' : ''}`}
          >
            <UserIcon />
            <span>About Me</span>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink
            href="/portfolio"
            title="Potfolio"
            className={`${
              /^\/portfolio*/.test(pathname) ? 'navigation-link_active' : ''
            }`}
          >
            <FolderIcon />
            <span>Potfolio</span>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink
            href="/previous-jobs"
            title="Previous Jobs"
            className={`${
              pathname === '/previous-jobs' ? 'navigation-link_active' : ''
            }`}
          >
            <BriefcaseIcon />
            <span>Previous Jobs</span>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink
            href="/contacts"
            title="Contacts"
            className={`${
              pathname === '/contacts' ? 'navigation-link_active' : ''
            }`}
          >
            <ChatBubbleLeftIcon />
            <span>Contacts</span>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink
            href="/cv.pdf"
            target="_blank"
            download="nnn"
            title="Get CV"
            className={`${
              pathname === '/resume'
                ? 'navigation-link_active navigation-link_resume'
                : 'navigation-link_resume'
            }`}
          >
            <FolderArrowDownIcon />
            <span>Get CV</span>
          </StyledNavigationLink>
        </StyledNavigationItem>
      </StyledNavigation>
    </StyledHeader>
  );
}

export default Header;
