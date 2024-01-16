'use client';

import React from 'react';
import styled from 'styled-components';

export const StyledOccupation = styled('li')``;

function PreviousJobs() {
  return (
    <>
      <h1>Occupation</h1>
      <hr />
      <div>
        <h2>Education</h2>
        <ul>
          <li>
            <h5>2011-2016</h5>
            <span>Barnaul, Russia</span>
            <h3>Altai State Technical University</h3>
            <h4>Institute of Architecture and Design</h4>
            <h5>Bachelor of Architecture</h5>
            <p>
              Design of buildings, structures and small architectural forms.
              Interior design.
            </p>
          </li>
          <li>
            <h5>2021-2022</h5>
            <span>Online</span>
            <h3>The Rolling Scopes School</h3>
            <h4>JavaScript and React courses</h4>
          </li>
          <li>
            <h5>2020-2023</h5>
            <span>Online</span>
            <h3>FreeCodeCamp</h3>
            <h4>Responsive Web Design</h4>
            <h4>JavaScript Algorithms and Data Structures</h4>
            <h4>Front End Development Libraries</h4>
            <h4>Back End Development and APIs</h4>
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <h2>Related work experience</h2>
      </div>
      <hr />
      <div>
        <h2>Nonrelated work experience</h2>
        <ul>
          <li>
            <h5>2013-2016</h5>
            <span>Barnaul, Russia</span>
            <h3>Quickpay</h3>
            <h4>Payments system</h4>
            <h5>Client support operator</h5>

            <p>
              Client support. Administration and control of the payment process.
            </p>
          </li>
          <li>
            <h5>2016-2022</h5>
            <span>Online</span>
            <h3>Yandex</h3>
            <h4>Search system</h4>
            <h5>Asessor</h5>
            <p>
              Ranking the results of search queries by relevance. Analysis of
              text data and media content.
            </p>
          </li>
          <li>
            <h5>2018</h5>
            <span>Online</span>
            <h3>Mail.ru</h3>
            <h4>Search system</h4>
            <h5>Asessor</h5>
            <p>
              Ranking the results of search queries by relevance. Analysis of
              text data and media content.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PreviousJobs;
