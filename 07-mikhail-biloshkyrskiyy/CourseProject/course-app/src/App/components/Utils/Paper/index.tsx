import React, { useContext } from 'react'
import Box from '@material-ui/core/Box'

import { HeightLayout } from '@/context'

import classes from './index.module.scss'

// Interface indicates
// what parameters are in the component
interface iProps {
    title: string
    supTitle: string
}
const Paper: React.FC<iProps> = (props: iProps) => {
    const heightContext = useContext(HeightLayout)
    return (
        <Box className={`w-100 h-100 ${classes.root}`}>
            <Box className='h-100 d-flex flex-column justify-content-center align-items-center' style={{ minHeight: heightContext.height }}>
                <img src={require('./paper.png').default} alt="" />
                <Box className={classes.title}>{props.title}</Box>
                <Box className={classes.supTitle}>{props.supTitle}</Box>
            </Box>
        </Box>
    )
}

export default Paper