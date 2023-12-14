'use client';

import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import { ProjectType, ScreenSize } from '@/components/interfaces';
import {
  reducer,
  portfolioInitialState,
  PortfolioActionKind,
} from './components/portfolioReducer';
import Instrument from './components/Instrument';
import Project from './components/Project';

export const StyledProjectsList = styled('ul')`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  flex-direction: column;

  @media ${ScreenSize.TABLET} {
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto 0;
  }
`;

export const StyledInstrumentsList = styled('ul')`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

function Portfolio() {
  const [projects, dispatch] = useReducer(reducer, portfolioInitialState);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/SavitskayaKseniya22/projects-photos/main/projects.json'
    )
      .then((res) => res.json())
      .then((data: ProjectType[]) => {
        dispatch({ type: PortfolioActionKind.SET, payload: data });
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!projects) return <>No portfolio data</>;

  return (
    <>
      <h1>Portfolio</h1>
      <hr />
      <StyledInstrumentsList>
        {projects.instruments.source.map((item) => (
          <Instrument
            key={item}
            addToClick={() => {
              dispatch({
                type: PortfolioActionKind.SELECTANDSORT,
                payload: item,
              });
            }}
          >
            {item}
          </Instrument>
        ))}
      </StyledInstrumentsList>
      <hr />
      <StyledProjectsList>
        {projects.projects.sorted.map((project) => (
          <Project key={project.name} data={project} />
        ))}
      </StyledProjectsList>
    </>
  );
}

export default Portfolio;
