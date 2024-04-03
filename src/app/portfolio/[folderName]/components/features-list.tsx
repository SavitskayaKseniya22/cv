'use client';

import { ProjectType } from '@/app/interfaces';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledFeaturesList = styled('ul')`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  flex-grow: 2;

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
      opacity: 0.2;
    }
  }
`;

export const StyledFeature = styled('li')`
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
    opacity: 0.2;
  }
`;

function FeaturesList({ data, title }: { data: ProjectType; title: string }) {
  return (
    <StyledFeaturesList>
      {data.features && data.features.length ? (
        data.features.map((feature) => (
          <StyledFeature key={feature}>
            <h3>{feature}</h3>
            <Image
              src={`https://raw.githubusercontent.com/SavitskayaKseniya22/projects-photos/main/photos/${title}/features/${feature}.png`}
              alt={feature}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOU+w8AAUEBH2QH9c4AAAAASUVORK5CYII="
            />
          </StyledFeature>
        ))
      ) : (
        <StyledFeature key="no-features">No features found</StyledFeature>
      )}
    </StyledFeaturesList>
  );
}

export default FeaturesList;
