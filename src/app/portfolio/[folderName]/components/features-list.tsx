'use client';

import { ProjectType, ScreenSize } from '@/app/interfaces';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const imageLoader = ({ src }: { src: string }) =>
  `https://raw.githubusercontent.com/SavitskayaKseniya22/projects-photos/main/photos/museum/features/${src}.png`;

export const StyledFeaturesList = styled('ul')`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto 0;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    position: relative;
    object-fit: contain;
    text-align: center;
    padding: 1rem;

    h3 {
      z-index: 11;
    }

    img {
      opacity: 0.4;
    }

    @media ${ScreenSize.LAPTOPS} {
      width: 200px;
      height: 200px;
    }

    @media ${ScreenSize.LAPTOPM} {
      width: 250px;
      height: 250px;
    }
  }
`;

function FeaturesList({ data }: { data: ProjectType }) {
  return (
    <StyledFeaturesList>
      {data.features.map((feature) => (
        <li key={feature}>
          <h3>{feature}</h3>
          <Image src={feature} alt={feature} loader={imageLoader} fill />
        </li>
      ))}
    </StyledFeaturesList>
  );
}

export default FeaturesList;
