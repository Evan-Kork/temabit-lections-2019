import React, { useState, ReactElement, useCallback } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { Locations } from './simple-map';
import { Clusterer } from '@react-google-maps/marker-clusterer';

interface Props {
  position: Locations;
  clusterer: Clusterer;
  description: string;
  hint: string;
}

export default function MarkerWithInfo({
  position,
  clusterer,
  description,
  hint,
}: Props): ReactElement {
  const [isShow, setShow] = useState(false);

  const onMarkerClick = useCallback(() => {
    setShow(!isShow);
  }, [isShow]);

  return (
    <Marker
      position={position}
      clusterer={clusterer}
      title={`${description}\nЯк знайти:${hint}`}
      onClick={onMarkerClick}
    >
      {isShow ? (
        <InfoWindow position={position} onCloseClick={onMarkerClick}>
          <span>
            {description}
            <br />
            {hint !== '' ? `Як знайти:${hint}` : null}
          </span>
        </InfoWindow>
      ) : null}
    </Marker>
  );
}
