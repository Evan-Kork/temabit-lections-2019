import React, { useState, ReactElement } from 'react';
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

  function handleMarkerClick() {
    setShow(!isShow);
  }

  return (
    <Marker
      position={props.position}
      clusterer={props.clusterer}
      title={`${props.description}\nЯк знайти:${props.hint}`}
      onClick={handleMarkerClick}
    >
      {isShow ? (
        <InfoWindow position={props.position} onCloseClick={handleMarkerClick}>
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


