'use client';

import React from 'react';
import ReactMap, { FullscreenControl, Marker } from 'react-map-gl';
import styled from 'styled-components';

const StyledMap = styled('div')`
  width: 100%;
  min-height: 5rem;
  flex-grow: 22;
  background-color: blue;
  flex-shrink: 0;
`;

function ContactsMap() {
  return (
    <StyledMap>
      <ReactMap
        mapboxAccessToken="pk.eyJ1IjoibmltZmE0NDAwIiwiYSI6ImNrdWcybzQyZTFqaHQyeG10dWo5MzQ5a2kifQ.SGFaxu_8iazsffda8R2DAA"
        initialViewState={{
          latitude: 42.68123,
          longitude: 23.28933,
          zoom: 14,
        }}
        reuseMaps
        mapStyle="mapbox://styles/mapbox/dark-v9"
        attributionControl={false}
        cursor="grab"
      >
        <Marker
          latitude={42.68123}
          longitude={23.28933}
          anchor="top"
          color="red"
        />
        <FullscreenControl />
      </ReactMap>
    </StyledMap>
  );
}

export default ContactsMap;
