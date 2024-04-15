'use client';

import { ProjectType } from '@/app/interfaces';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StyledFeaturesList = styled('ul')`
  display: grid;
  gap: 1rem;
  flex-grow: 2;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-auto-rows: 200px;
  padding: 1rem;
  place-content: center;
`;

const StyledFeature = styled('li')`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  object-fit: contain;
  text-align: center;
  padding: 1rem;
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
              objectFit="contain"
              style={{ opacity: 0.2 }}
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
