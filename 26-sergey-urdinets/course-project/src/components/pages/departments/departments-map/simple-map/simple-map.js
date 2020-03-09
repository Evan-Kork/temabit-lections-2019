import React from 'react';
import { GoogleMap, LoadScript, MarkerClusterer } from '@react-google-maps/api';
import MarkerWithInfo from './marker';

const mapContainerStyle = {
  height: '600px',
  width: '1000px'
};
const center = { lat: 48.5721089, lng: 31.9832675 };
const options = {
  imagePath:
    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
};

function SimpleMap(props) {
  const locations = props.data.map(item => {
    return {
      lat: +item.lat,
      lng: +item.lng,
      description: `${item.format} ${item.description}, ${item.adress} (${item.shedule_description})`,
      hint: item.public.navigation_ua
    };
  });

  return locations.length ? (
    <LoadScript id='script-loader' googleMapsApiKey={process.env.API_KEY}>
      <GoogleMap
        id='marker-example'
        mapContainerStyle={mapContainerStyle}
        zoom={6}
        center={center}
      >
        <MarkerClusterer options={options}>
          {clusterer =>
            locations.map((location, i) => (
              <MarkerWithInfo
                key={i}
                position={location}
                clusterer={clusterer}
                description={location.description}
                hint={location.hint}
              />
            ))
          }
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  ) : null;
}

export default SimpleMap;
