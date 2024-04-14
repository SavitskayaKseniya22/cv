'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { StyledMainContent } from '../components/main-layout';

const StyledOccupation = styled(StyledMainContent)`
  a {
    color: tan;
  }

  h2 {
    display: flex;
    gap: 1rem;
    align-items: center;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const StyledOccupationItem = styled('li')`
  background-color: rgba(128, 128, 128, 0.1);
  padding: 1rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  ul {
    margin-left: 1rem;
  }
`;

function Occupation() {
  return (
    <StyledOccupation>
      <h1>Occupation</h1>

      <h2>
        <AcademicCapIcon /> Education
      </h2>

      <ul>
        <StyledOccupationItem>
          <div>
            <Link href="https://en.altstu.ru/" target="_blank">
              <h3>Altai State Technical University</h3>
            </Link>
            <h4>2011-2016</h4>
          </div>

          <h5>Bachelor of Architecture</h5>
          <p>
            Design of buildings, structures and small architectural forms.
            Interior design.
          </p>
        </StyledOccupationItem>
        <StyledOccupationItem>
          <div>
            <Link href="https://rs.school/" target="_blank">
              <h3>The Rolling Scopes School</h3>
            </Link>
            <h4>2021-2022</h4>
          </div>

          <ul>
            <li>
              <Link
                href="https://app.rs.school/certificate/kk9vy6aa"
                target="_blank"
              >
                <h5>JavaScript course</h5>
              </Link>
            </li>
            <li>
              <Link
                href="https://app.rs.school/certificate/u3kin2dj"
                target="_blank"
              >
                <h5>React course</h5>
              </Link>
            </li>
          </ul>
        </StyledOccupationItem>
        <StyledOccupationItem>
          <div>
            <Link href="/" target="_blank">
              <h3>FreeCodeCamp</h3>
            </Link>

            <h4>2020-2023</h4>
          </div>
          <ul>
            <li>
              <h5>Responsive Web Design</h5>
            </li>
            <li>
              <h5>JavaScript Algorithms and Data Structures</h5>
            </li>
            <li>
              <h5>Front End Development Libraries</h5>
            </li>
            <li>
              <h5>Back End Development and APIs</h5>
            </li>
          </ul>
        </StyledOccupationItem>
        <StyledOccupationItem>
          <div>
            <h3>
              <Link
                href="https://www.codewars.com/users/savitskaya.kseniya.22"
                target="_blank"
              >
                Codewars
              </Link>
            </h3>
            <h4>2020-2024</h4>
          </div>

          <Image
            src="/icons/codewars-large.svg"
            width={250}
            height={50}
            alt="Codewars profile"
          />
        </StyledOccupationItem>
      </ul>

      <h2>
        <BriefcaseIcon />
        Unrelated work experience
      </h2>
      <ul>
        <StyledOccupationItem>
          <div>
            <h3>Google</h3>
            <h4>2013</h4>
          </div>

          <h5>Field agent</h5>
          <p>
            A short-term project on collecting, processing, and analyzing
            information about local organizations and enterprises
          </p>
        </StyledOccupationItem>
        <StyledOccupationItem>
          <div>
            <Link href="https://quickpay.ru/" target="_blank">
              <h3>Quickpay - payments system</h3>
            </Link>

            <h4>2013-2016</h4>
          </div>

          <h5>Client support</h5>
          <p>Administration and control of the payment process.</p>
        </StyledOccupationItem>
        <StyledOccupationItem>
          <div>
            <h3>Yandex</h3>
            <h4>2016-2022</h4>
          </div>
          <h5>Asessor</h5>
          <p>
            Ranking the results of search queries by relevance. Analysis of text
            data and media content.
          </p>
        </StyledOccupationItem>
        <StyledOccupationItem>
          <div>
            <h3>Mail.ru</h3>
            <h4>2018</h4>
          </div>

          <h5>Asessor</h5>
          <p>
            Ranking the results of search queries by relevance. Analysis of text
            data and media content.
          </p>
        </StyledOccupationItem>
      </ul>
    </StyledOccupation>
  );
}

export default Occupation;
