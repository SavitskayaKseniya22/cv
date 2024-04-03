'use client';

import InstrumentsList from '@/components/instruments-list';
import React, { useReducer, useState, useEffect } from 'react';
import { ProjectType } from '../interfaces';
import Instrument from './components/Instrument';
import {
  reducer,
  portfolioInitialState,
  PortfolioActionKind,
  SortType,
} from './components/portfolio-reducer';
import Project from './components/project';
import SortButton from './components/sort-button';
import ProjectsList from './components/project-list';

function Portfolio() {
  const [projects, dispatch] = useReducer(reducer, portfolioInitialState);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/SavitskayaKseniya22/projects-photos/main/projects.json'
    )
      .then((res) => res.json())
      .then((data: ProjectType[]) => {
        dispatch({
          type: PortfolioActionKind.SET,
          payload: data.filter((item) => item.isItReady),
        });
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

      <ProjectsList>
        {projects.projects.sorted.map((project) => (
          <Project key={project.name} data={project} />
        ))}
      </ProjectsList>

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
