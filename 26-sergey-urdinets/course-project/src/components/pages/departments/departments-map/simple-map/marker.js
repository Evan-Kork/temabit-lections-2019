import React, { useState } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';

function MarkerWithInfo(props) {
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

export default MarkerWithInfo;
