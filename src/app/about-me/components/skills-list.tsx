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

const StyledSkill = styled('li')`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  @media ${ScreenSize.TABLET} {
    gap: 1.5rem;
    flex-direction: row;
  }
`;

const StyledSkillDetailed = styled('ul')`
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
      <StyledSkill>
        <CodeBracketIcon className="styled-svg styled-svg_big styled-svg_red" />
        <StyledSkillDetailed>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
        </StyledSkillDetailed>
      </StyledSkill>
      <StyledSkill>
        <HashtagIcon className="styled-svg styled-svg_big styled-svg_red" />
        <StyledSkillDetailed>
          <li>CSS</li>
          <li>SASS</li>
          <li>Styled Components</li>
        </StyledSkillDetailed>
      </StyledSkill>
      <StyledSkill>
        <Cog8ToothIcon className="styled-svg styled-svg_big styled-svg_red" />
        <StyledSkillDetailed>
          <li>Jest</li>
          <li>React Testing Library</li>
        </StyledSkillDetailed>
      </StyledSkill>
    </StyledSkills>
  );
}

export default SkillsList;
