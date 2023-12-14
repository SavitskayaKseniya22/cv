'use client';

import React from 'react';
import styled from 'styled-components';
import {
  CodeBracketIcon,
  HashtagIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/outline';
import { SVGType, StyledLiWithMarker } from '@/components/styled-components';
import ProgressBar from '@/components/ProgressBar';
import { ScreenSize } from '@/components/interfaces';

const StyledSkillsList = styled('ul')<{ $type: SVGType; $color: string }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > li {
    ${StyledLiWithMarker}

    & > ul {
      width: 100%;
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
    }
  }

  @media ${ScreenSize.LAPTOPXL} {
    flex-direction: row;
    hr {
      display: none;
    }
  }
`;

const StyledSkill = styled('li')`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  @media ${ScreenSize.LAPTOPS} {
    flex-direction: row;
    width: 100%;
  }

  @media ${ScreenSize.LAPTOPM} {
    width: 70%;
  }

  @media ${ScreenSize.LAPTOPL} {
    width: 50%;
  }
  @media ${ScreenSize.LAPTOPXL} {
    width: 100%;
  }
`;

function AboutMe() {
  return (
    <>
      <h1>About me</h1>

      <hr />

      <div>
        <h2>Bio</h2>
        <h3>Born: November 8, 1993, Russia</h3>
        <h3>Location: Sofia, Bulgaria</h3>
        <p>
          I am 30 years old. I am a versatile person. My hobbies are cinema,
          handicrafts, video games, programming. I believe that a person needs
          to constantly be in development, learning new things, improving
          acquired skills. I have no commercial development experience, but I am
          able to maintain interest for a long time, I can compensate for the
          gaps in education with diligence and perseverance.
        </p>
      </div>
      <hr />
      <div>
        <h2>Skills</h2>
        <StyledSkillsList $type={SVGType.BIG} $color="#d62222">
          <li>
            <CodeBracketIcon className="marker" />
            <ul>
              <StyledSkill>
                <span> JavaScript</span>
                <ProgressBar value={4} total={5} />
              </StyledSkill>
              <StyledSkill>
                <span>TypeScript</span>
                <ProgressBar value={4} total={5} />
              </StyledSkill>
              <StyledSkill>
                <span>React</span>
                <ProgressBar value={4} total={5} />
              </StyledSkill>

              <StyledSkill>
                <span>Next.js</span>
                <ProgressBar value={1} total={5} />
              </StyledSkill>
            </ul>
          </li>
          <hr />
          <li>
            <HashtagIcon className="marker" />
            <ul>
              <StyledSkill>
                <span>CSS</span>
                <ProgressBar value={4} total={5} />
              </StyledSkill>
              <StyledSkill>
                <span>SASS</span>
                <ProgressBar value={4} total={5} />
              </StyledSkill>
              <StyledSkill>
                <span>Styled Components</span>
                <ProgressBar value={4} total={5} />
              </StyledSkill>
            </ul>
          </li>
          <hr />
          <li>
            <Cog8ToothIcon className="marker" />
            <ul>
              <StyledSkill>
                <span>Jest</span>
                <ProgressBar value={2} total={5} />
              </StyledSkill>
              <StyledSkill>
                <span>React Testing Library</span>
                <ProgressBar value={2} total={5} />
              </StyledSkill>
            </ul>
          </li>
        </StyledSkillsList>
      </div>
    </>
  );
}

export default AboutMe;
