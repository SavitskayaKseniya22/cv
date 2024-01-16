'use client';

import React from 'react';
import SkillsList from './about-me/components/skills-list';
import Bio from './about-me/components/bio';

function AboutMe() {
  return (
    <>
      <h1>About me</h1>
      <hr />
      <Bio />
      <hr />
      <SkillsList />
    </>
  );
}

export default AboutMe;
