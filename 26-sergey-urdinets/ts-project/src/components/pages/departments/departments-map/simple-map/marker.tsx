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

export default function MarkerWithInfo(props: Props): ReactElement {
  const [isShow, setShow] = useState(false);

  const onMarkerClick = useCallback(() => {
    setShow(!isShow);
  }, []);

  return (
    <Marker
      position={props.position}
      clusterer={props.clusterer}
      title={`${props.description}\nЯк знайти:${props.hint}`}
      onClick={onMarkerClick}
    >
      {isShow ? (
        <InfoWindow position={props.position} onCloseClick={onMarkerClick}>
          <span>
            {props.description}
            <br />
            {props.hint !== '' ? `Як знайти:${props.hint}` : null}
          </span>
        </InfoWindow>
      ) : null}
    </Marker>
  );
}
