'use client';

import { ProjectType, ScreenSize } from '@/app/interfaces';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import InstrumentsList from '@/components/instruments-list';
import styled from 'styled-components';
import { ArrowUpOnSquareStackIcon } from '@heroicons/react/24/outline';
import Complexity from '@/components/complexity';
import FeaturesList from './components/features-list';
import GithubLink from './components/github-link';

const StyledButtonList = styled('div')`
  display: flex;
  gap: 1rem;

  a {
    color: white;
    display: block;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    position: relative;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const StyledPortfolioItem = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  column-gap: 2rem;
  row-gap: 1rem;

  @media ${ScreenSize.TABLET} {
    flex-direction: row;
  }
`;

const StyledH1 = styled('h1')`
  svg {
    width: 1.5rem;
    height: 1.5rem;
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
      <StyledH1>{loadedData.name}</StyledH1>

      <hr />

      <StyledPortfolioItem>
        <p>{loadedData.description}</p>

        <StyledButtonList>
          <Link href={loadedData.deploy} target="_blank">
            <ArrowUpOnSquareStackIcon />
          </Link>
          <GithubLink href={loadedData.github} />
        </StyledButtonList>
      </StyledPortfolioItem>

      <hr />

      <InstrumentsList>
        {loadedData.instruments.map((instrument) => (
          <li key={instrument}>{instrument}</li>
        ))}
      </InstrumentsList>

      <hr />

      <FeaturesList data={loadedData} title={params.folderName as string} />
      <Complexity
        complexity={loadedData.complexity}
        className="complexity_in-project"
      />

      <p>{`${loadedData.date[0]} - ${loadedData.date[1]}`}</p>
    </>
  );
}

export default PortfolioItem;
