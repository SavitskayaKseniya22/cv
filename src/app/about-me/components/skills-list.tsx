'use client';

import React from 'react';
import styled from 'styled-components';
import {
  CodeBracketIcon,
  Cog8ToothIcon,
  HashtagIcon,
} from '@heroicons/react/24/outline';
import { ScreenSize } from '@/app/interfaces';

const StyledSkills = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0.5rem;
  align-items: center;
`;

const StyledSkillsPart = styled('li')`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 0.5rem;

  svg {
    width: 2rem;
    height: 2rem;
    color: #d62222;
    flex-shrink: 0;
  }

  @media ${ScreenSize.TABLET} {
    gap: 1.5rem;
    flex-direction: row;
  }
`;

const StyledSkillsListDetailed = styled('ul')`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media ${ScreenSize.TABLET} {
    width: unset;
  }
`;

function SkillsList() {
  return (
    <StyledSkills>
      <StyledSkillsPart>
        <CodeBracketIcon className="marker" />
        <StyledSkillsListDetailed>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
        </StyledSkillsListDetailed>
      </StyledSkillsPart>
      <StyledSkillsPart>
        <HashtagIcon className="marker" />
        <StyledSkillsListDetailed>
          <li>CSS</li>
          <li>SASS</li>
          <li>Styled Components</li>
        </StyledSkillsListDetailed>
      </StyledSkillsPart>
      <StyledSkillsPart>
        <Cog8ToothIcon className="marker" />
        <StyledSkillsListDetailed>
          <li>Jest</li>
          <li>React Testing Library</li>
        </StyledSkillsListDetailed>
      </StyledSkillsPart>
    </StyledSkills>
  );
}

export default SkillsList;
