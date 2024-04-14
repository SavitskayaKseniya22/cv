'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { ScreenSize } from '@/app/interfaces';

const StyledBioContent = styled('div')`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 2;

  @media ${ScreenSize.LAPTOPS} {
    gap: 2rem;
    flex-direction: row;
  }
`;

const StyledBioImage = styled(Image)`
  width: auto;
  height: auto;
`;

function Bio() {
  return (
    <StyledBioContent>
      <div>
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
        <h3>Languages: English - B2, Russian - native</h3>
      </div>
      <StyledBioImage
        src="/profile.jpg"
        width={200}
        height={230}
        alt="profile"
        priority
      />
    </StyledBioContent>
  );
}

export default Bio;
