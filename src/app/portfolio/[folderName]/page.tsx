/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { ProjectType } from '@/components/interfaces';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import BackButton from '@/components/backButton';

const imageLoader = ({ src }: { src: string }) => `${src}`;

export const StyledInstrumentsList = styled('ul')`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  li {
    padding: 0.5rem;
  }
`;

export const StyledScreenshotsList = styled('ul')`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto 0;

  li {
    position: relative;
    object-fit: contain;
  }
`;

function PortfolioItem() {
  const [loadedData, setLoadedData] = useState<null | ProjectType>();
  const [isLoading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/SavitskayaKseniya22/projects-photos/main/projects.json'
    )
      .then((res) => res.json())
      .then((data: ProjectType[]) => {
        const searchedProject =
          data.filter(
            (project) =>
              project.name.toLowerCase() ===
              (params.folderName as string).replaceAll('-', ' ')
          )[0] || null;

        setLoadedData(searchedProject);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params.folderName]);

  if (isLoading) return <p>Loading...</p>;
  if (!loadedData) return <>No portfolio data</>;

  return (
    <>
      <BackButton />
      <Link href={loadedData.github}>GitHub</Link>
      <h1>
        <Link target="_blank" href={loadedData.deploy}>
          {loadedData.name}
        </Link>
      </h1>
      <hr />
      <p>{loadedData.description}</p>
      <hr />
      <p>{loadedData.date}</p>
      <hr />

      <StyledInstrumentsList>
        {loadedData.instruments.map((instrument) => (
          <li key={instrument}>{instrument}</li>
        ))}
      </StyledInstrumentsList>

      <hr />

      <StyledScreenshotsList>
        {loadedData.screenshots.map((screenshot) => (
          <li key={screenshot}>
            <Link href={screenshot} target="_blank">
              <Image
                src={screenshot}
                alt="App screenshot"
                loader={imageLoader}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                width={500}
                height={300}
              />
            </Link>
          </li>
        ))}
      </StyledScreenshotsList>
    </>
  );
}

export default PortfolioItem;
