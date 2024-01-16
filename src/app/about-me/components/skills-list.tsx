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
import { ScreenSize } from '@/app/interfaces';

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

function SkillsList() {
  return (
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
        <li>
          <Cog8ToothIcon className="marker" />
          <ul>
            <StyledSkill>
              <span>Jest</span>
              <ProgressBar value={1} total={5} />
            </StyledSkill>
            <StyledSkill>
              <span>React Testing Library</span>
              <ProgressBar value={1} total={5} />
            </StyledSkill>
          </ul>
        </li>
      </StyledSkillsList>
    </div>
  );
}

export default SkillsList;
