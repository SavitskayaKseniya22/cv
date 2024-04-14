'use client';

import React from 'react';
import SkillsList from './about-me/components/skills-list';
import Bio from './about-me/components/bio';
import { StyledMainContent } from './components/main-layout';

function AboutMe() {
  return (
    <StyledMainContent>
      <h1>About me</h1>
      <Bio />
      <SkillsList />
    </StyledMainContent>
  );
}

export default AboutMe;
