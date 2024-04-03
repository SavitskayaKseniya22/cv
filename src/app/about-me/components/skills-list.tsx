'use client';

import React from 'react';
import styled from 'styled-components';
import {
  CodeBracketIcon,
  Cog8ToothIcon,
  HashtagIcon,
} from '@heroicons/react/24/outline';
import { SVGType, ScreenSize } from '@/app/interfaces';
import { StyledLiWithMarker } from '@/components/styled-components';

const StyledSkills = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledSkillsPart = styled(StyledLiWithMarker)<{
  $type: SVGType;
  $color: string;
}>`
  display: flex;
  align-items: center;

  flex-direction: column;

  @media ${ScreenSize.TABLET} {
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
  width: 70%;

  @media ${ScreenSize.TABLET} {
    width: unset;
  }
`;

function SkillsList() {
  return (
    <StyledSkills>
      <StyledSkillsPart $type={SVGType.BIG} $color="#d62222">
        <CodeBracketIcon className="marker" />
        <StyledSkillsListDetailed>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
        </StyledSkillsListDetailed>
      </StyledSkillsPart>
      <StyledSkillsPart $type={SVGType.BIG} $color="#d62222">
        <HashtagIcon className="marker" />
        <StyledSkillsListDetailed>
          <li>CSS</li>
          <li>SASS</li>
          <li>Styled Components</li>
        </StyledSkillsListDetailed>
      </StyledSkillsPart>
      <StyledSkillsPart $type={SVGType.BIG} $color="#d62222">
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
