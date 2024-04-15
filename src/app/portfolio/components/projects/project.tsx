'use client';

import React from 'react';
import { ProjectType, ScreenSize } from '@/app/interfaces';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Complexity from '../complexity';

const imageLoader = ({ src }: { src: string }) => src;

const StyledProject = styled('li')`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 1rem;
    z-index: 1;
    overflow: hidden;
    width: 120px;
    height: 120px;

    @media ${ScreenSize.LAPTOPM} {
      width: 150px;
      height: 150px;
    }

    img {
      z-index: -1;
      filter: grayscale(80%) opacity(20%);
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
        <Image
          fill
          src={data.preview}
          loader={imageLoader}
          alt={data.name}
          unoptimized
          placeholder="blur"
          blurDataURL='"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8pqT0HwAFCwIbEaevOQAAAABJRU5ErkJggg=="'
        />
        <Complexity
          complexity={data.complexity}
          className="complexity_in-project-list"
        />
      </Link>
    </StyledProject>
  );
}

export default Project;
