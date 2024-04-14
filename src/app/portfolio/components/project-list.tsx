import { ProjectType, ScreenSize } from '@/app/interfaces';
import React from 'react';
import styled from 'styled-components';
import Project from './project';

const StyledProjectsList = styled('ul')`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${ScreenSize.TABLET} {
    gap: 1rem;
  }

  @media ${ScreenSize.LAPTOPXL} {
    gap: 1.5rem;
  }
`;

function ProjectsList({ projects }: { projects: ProjectType[] }) {
  return (
    <StyledProjectsList>
      {projects.map((project) => (
        <Project key={project.name} data={project} />
      ))}
    </StyledProjectsList>
  );
}

export default ProjectsList;
