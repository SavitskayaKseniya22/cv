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
  flex-grow: 1;

  @media ${ScreenSize.TABLET} {
    flex-direction: column;
    justify-content: center;
  }

  @media ${ScreenSize.LAPTOPL} {
    gap: 1.25rem;
  }

  .navigation-item {
    @media ${ScreenSize.TABLET} {
      width: 100%;
      justify-content: flex-start;
    }

    .navigation-item-link {
      &.navigation-item-link_active {
        color: #d62222;
      }

      @media ${ScreenSize.TABLET} {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
      }

      .navigation-item-link-text {
        display: none;

        @media ${ScreenSize.LAPTOPL} {
          display: inline;
          white-space: nowrap;
        }
      }
    }
  }
`;

function Header() {
  const pathname = usePathname();

  return (
    <StyledHeader>
      <StyledNavigation>
        <li className="navigation-item">
          <Link
            href="/"
            title="About Me"
            className={`navigation-item-link ${
              pathname === '/' ? 'navigation-item-link_active' : ''
            }`}
          >
            <UserIcon className="styled-svg styled-svg_big" />
            <span className="navigation-item-link-text">About Me</span>
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            href="/portfolio"
            title="Potfolio"
            className={`navigation-item-link ${
              /^\/portfolio*/.test(pathname)
                ? 'navigation-item-link_active'
                : ''
            }`}
          >
            <FolderIcon className="styled-svg styled-svg_big" />
            <span className="navigation-item-link-text">Potfolio</span>
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            href="/occupations"
            title="Occupation"
            className={`navigation-item-link ${
              pathname === '/occupations' ? 'navigation-item-link_active' : ''
            }`}
          >
            <BriefcaseIcon className="styled-svg styled-svg_big" />
            <span className="navigation-item-link-text">Occupations</span>
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            href="/contacts"
            title="Contacts"
            className={`navigation-item-link ${
              pathname === '/contacts' ? 'navigation-item-link_active' : ''
            }`}
          >
            <ChatBubbleLeftIcon className="styled-svg styled-svg_big" />
            <span className="navigation-item-link-text">Contacts</span>
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            href="/CV_Savitskaia.pdf"
            target="_blank"
            download="CV_Savitskaia"
            title="Get CV"
            className="navigation-item-link"
          >
            <FolderArrowDownIcon className="styled-svg styled-svg_big styled-svg_red" />
            <span className="navigation-item-link-text">Get CV</span>
          </Link>
        </li>
      </StyledNavigation>
    </StyledHeader>
  );
}

export default Header;
