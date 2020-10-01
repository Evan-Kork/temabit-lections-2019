import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { plainToClass } from "class-transformer";
import { GeoLocMarket, geoLocation } from './class-google-map'
import { validate } from 'class-validator';
import {ResultData} from '../../../../../../interface'
import '../../../../../scss/pages/branches/elements/google-map/google-map.scss';

interface Markers {
  text: string,
  lat: string,
  lng: string
}
interface Prop {
  center: {
    lat: number,
    lng: number
  },
  zoom: number
};

const Marker: React.FC<Markers> = ({ text }) => <FontAwesomeIcon className="geotag" title={text} icon={faMapMarkerAlt} />;

const MyGoogleMap = (props: Prop) => {
  const [data, setData]: [Array<GeoLocMarket>, Function] = React.useState([])
  React.useEffect(() => {
    fetch('http://localhost:9000/branches').
      then((res) => res.json()).
      then((result: ResultData) => {
        if (result.status) {
          const geoTag = plainToClass(geoLocation, result)
          validate(geoTag).then(res => {
            if (res.length > 0) {
              console.log('Error!!!! Poop data! Look=>', res)
            } else {
              setData(geoTag.result)
            }
          })
        }
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
          data.map(({ lat, lng, number, infoStringBranch }) => (
            <Marker
              key={number}
              lat={lat}
              lng={lng}
              text={infoStringBranch()}
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