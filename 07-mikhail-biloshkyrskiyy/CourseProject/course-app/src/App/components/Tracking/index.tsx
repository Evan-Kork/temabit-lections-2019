import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { iTracking } from '@/interfaces/iTracking'

import classes from './index.module.scss'

// Interface indicates
// what parameters are in the component
interface iProps {
    tracking: iTracking
}
const Tracking: React.FC<iProps> = (props: iProps) => {
    return (
        <Box className={classes.root}>
            <Box className={classes.header} display={{ xs: 'none' , sm: 'block' }}>
                <Grid container>
                    <Grid xs={3} sm={4} className='p-3 text-center' item>Tracking</Grid>
                    <Grid xs={3} sm={2} className='p-3 text-center' item>Status</Grid>
                    <Grid xs={3} sm={3} className='p-3 text-center' item>Description</Grid>
                    <Grid xs={3} sm={3} className='p-3 text-center' item>Action</Grid>
                </Grid>
            </Box>
            <div className='my-1'></div>
            <Box className={classes.body}>
                <Grid container>
                    <Grid xs={12} sm={4} className='p-3 text-center d-flex align-items-center justify-content-center' item>
                        <img src="https://via.placeholder.com/100x75" alt="" />
                        <Box className='ml-2'>
                            <Box className={classes.text}>
                                <p className={`${classes.text_req} text-left`}>Order №:</p>
                                <p className={`${classes.text_res} text-left`}>{props.tracking.orderNumber}</p>
                            </Box>
                            <Box className={classes.text}>
                                <p className={`${classes.text_req} text-left`}>Order time:</p>
                                <p className={`${classes.text_res} text-left`}>{props.tracking.time}</p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={2} className='p-3 d-flex flex-column flex-lg-row align-items-center justify-content-center' item>
                        <Box className={`${classes.text} text-center`}>
                            <p className={classes.text_status}>{props.tracking.status}</p>
                            <p className={classes.text_req}>
                                <Link to='/' className={classes.link}>
                                    <span>Message to sender</span>
                                    <FontAwesomeIcon icon={faEnvelope} className='ml-2' />
                                </Link>
                            </p>
                        </Box>
                        {/* This box is actual from the size of the screen md and below. */}
                        <Box className={`${classes.text} text-center`} display={{ xs: 'block', sm: 'none' }}>
                            <p className={classes.text_res}>{props.tracking.orderDescription}</p>
                        </Box>
                    </Grid>
                    {/* This grid is actual from the size of the screen md and above. */}
                    <Grid sm={3} className='p-lg-3 d-flex align-items-center justify-content-center' item>
                        <Box className={`${classes.text} text-center`} display={{ xs: 'none', sm: 'block' }}>
                            <p className={classes.text_res}>{props.tracking.orderDescription}</p>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={3} className='p-3 d-flex align-items-center justify-content-center' item>
                        <Box className={`${classes.button} d-flex flex-column w-100`}>
                            <Button variant="contained" color="primary">Order delivery</Button>
                            <div className='my-1'></div>
                            <Button variant="contained" color="primary">Send a complaint</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Tracking