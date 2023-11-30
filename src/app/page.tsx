'use client';

import React from 'react';
import styled from 'styled-components';

import {
  CodeBracketIcon,
  HashtagIcon,
  Cog8ToothIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/24/outline';

const StyledSkillsList = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledSkillsItem = styled('li')`
  display: flex;
  gap: 1rem;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
    color: #d62222;
  }

  .ellipsisVertical {
    width: 1rem;
    height: 1rem;
    color: #d62222;
  }

  p {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    flex-wrap: wrap;
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
        <StyledSkillsList>
          <StyledSkillsItem>
            <CodeBracketIcon />
            <p>
              JavaScript <EllipsisVerticalIcon className="ellipsisVertical" />{' '}
              TypeScript <EllipsisVerticalIcon className="ellipsisVertical" />{' '}
              React <EllipsisVerticalIcon className="ellipsisVertical" />{' '}
              Next.js
            </p>
          </StyledSkillsItem>
          <StyledSkillsItem>
            <HashtagIcon />
            <p>
              {' '}
              Css <EllipsisVerticalIcon className="ellipsisVertical" /> Sass{' '}
              <EllipsisVerticalIcon className="ellipsisVertical" />
              StyledComponents
            </p>
          </StyledSkillsItem>
          <StyledSkillsItem>
            <Cog8ToothIcon />
            <p>
              Jest <EllipsisVerticalIcon className="ellipsisVertical" /> React
              Testing Library
            </p>
          </StyledSkillsItem>
        </StyledSkillsList>
      </div>
    </>
  );
}

export default AboutMe;
