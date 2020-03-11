import React from 'react'
import Box from '@material-ui/core/Box'

import classes from './index.module.scss'
// Interface indicates
// what parameters are in the component
interface iProps {
    src: string
}
const Banner: React.FC<iProps> = (props: iProps) => {
    return (
        <Box>
            <img className={classes.img} src={props.src} alt=""/>
        </Box>
    )
}

export default Banner