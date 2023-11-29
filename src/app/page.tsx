'use client';

import React from 'react';
import styled from 'styled-components';

const StyledAboutMe = styled('h1')`
  color: red;
`;

function AboutMe() {
  return <StyledAboutMe>Hello, AboutMe!</StyledAboutMe>;
}

export default AboutMe;
