import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import '../../../../../scss/pages/branches/elements/google-map/google-map.scss'

const Marker = ({text}) => <FontAwesomeIcon className="geotag" title={text} icon={faMapMarkerAlt} />;

const MyGoogleMap = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:9000/branches').
      then((res) => res.json()).
      then(({ result = [] }) => {
        setData(result)
      })
  }, [])
  return (
    <Container className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAP_API_KAY,
          language: 'ua',
        }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        {
          data.map(({ lat, lng, number, description, adress, format, shedule_description, ...rest }) => (
            <Marker 
              key={number}
              lat={lat}
              lng={lng}
              text={`${format} ${description} ${adress} ${shedule_description}
              Як знайти: ${rest.public.navigation_ua}`}
            />
          ))
        }
      </GoogleMapReact>
    </Container>
  );
}
MyGoogleMap.defaultProps = {
  center: {
    lat: 49.550717,
    lng: 31.090204
  },
  zoom: 6
};

export default MyGoogleMap;