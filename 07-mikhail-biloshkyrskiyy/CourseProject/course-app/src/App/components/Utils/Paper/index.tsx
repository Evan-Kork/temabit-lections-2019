import React from 'react'
import Box from '@material-ui/core/Box'

import classes from './index.module.scss'

const Paper: React.FC = () => {
    return (
        <Box className={`w-100 h-100 ${classes.root}`}>
            <Box className='h-100 d-flex flex-column justify-content-center align-items-center'>
                <img src={require('./paper.png')} alt="" />
                <Box className={classes.title}>Uhoh! There's not a single declaration to trace.</Box>
                <Box className={classes.supTitle}>Enter declaration number.</Box>
            </Box>
        </Box>
    )
}

export default Paper