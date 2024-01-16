/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { ProjectType } from '@/app/interfaces';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import BackButton from '@/components/backButton';
import InstrumentsList from '@/components/instruments-list';
import FeaturesList from './components/features-list';

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
      <p>{`${loadedData.date[0]}-${loadedData.date[1]}`}</p>
      <hr />

      <InstrumentsList>
        {loadedData.instruments.map((instrument) => (
          <li key={instrument}>{instrument}</li>
        ))}
      </InstrumentsList>

      <hr />

      <FeaturesList data={loadedData} />
    </>
  );
}

export default PortfolioItem;
