import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import Box from '@material-ui/core/Box'

import { iOffice } from '@/interfaces/iOffice'
import classes from './index.module.scss'

import config from '@/config/index'

const Marker = (props: any) => {
    return (
        <div className={classes.marker}
            style={{ backgroundColor: props.color, cursor: 'pointer' }}
            title={props.name}
        />
    );
}
// Interface indicates
// what parameters are in the component
interface iProps {
    branch: iOffice
}
const Location: React.FC<iProps> = (props: iProps) => {
    const [zoom, setZoom] = useState(14)
    const [location, setLocation] = useState({ lat: +props.branch.lat, lng: +props.branch.lng })

    useEffect(() => {
        setLocation({ lat: +props.branch.lat, lng: +props.branch.lng })
    }, [+props.branch.lat, +props.branch.lng])

    return (
        <Box className={classes.root}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: config.GoogleMapApi }}
                center={location}
                zoom={zoom}
            >
                <Marker
                    lat={location.lat}
                    lng={location.lng}
                    name="Justin"
                    color="blue"
                />
            </GoogleMapReact>
        </Box>
    )
}

export default Location