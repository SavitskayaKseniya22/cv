'use client';

import React from 'react';
import { ProjectType } from '@/components/interfaces';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

const imageLoader = ({ src }: { src: string }) => src;

export const StyledProject = styled('li')`
  width: 150px;
  height: 150px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 1rem;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;

    img {
      z-index: -1;
      filter: grayscale(90%) opacity(20%);
      transition: transform 1s, filter 1s;
    }

    &:hover {
      img {
        filter: grayscale(60%) opacity(40%);
        transform: scale(1.2);
        transition: transform 1s, filter 1s;
      }
    }
  }
`;

function Project({ data }: { data: ProjectType }) {
  return (
    <StyledProject>
      <Link href={`/portfolio/${data.name.toLowerCase().replaceAll(' ', '-')}`}>
        <h3>{data.name}</h3>
        <Image fill src={data.preview} loader={imageLoader} alt={data.name} />
      </Link>
    </StyledProject>
  );
}

export default Project;
