'use client';

import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import { ProjectType, ScreenSize } from '@/app/interfaces';
import InstrumentsList from '@/components/instruments-list';
import {
  reducer,
  portfolioInitialState,
  PortfolioActionKind,
  SortType,
} from './components/portfolioReducer';
import Instrument from './components/Instrument';
import Project from './components/Project';
import SortButton from './components/SortButton';

export const StyledProjectsList = styled('ul')`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto 0;

  @media ${ScreenSize.TABLET} {
    gap: 1rem;
  }

  @media ${ScreenSize.LAPTOPL} {
    gap: 1.5rem;
  }
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
  if (!projects) return <p>No portfolio data</p>;

  return (
    <>
      <h1>Portfolio</h1>

      <hr />

      <InstrumentsList>
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
      </InstrumentsList>

      <hr />

      <StyledProjectsList>
        {projects.projects.sorted.map((project) => (
          <Project key={project.name} data={project} />
        ))}
      </StyledProjectsList>

      <SortButton
        sort={projects.sort}
        onClick={() => {
          dispatch({
            type: PortfolioActionKind.SORT,
            payload:
              projects.sort === SortType.DOWN ? SortType.UP : SortType.DOWN,
          });
        }}
      />
    </>
  );
}

export default Portfolio;
