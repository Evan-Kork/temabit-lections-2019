import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import { Row, Col } from 'react-bootstrap'

import { HeightLayout } from '@/context'
import classes from './index.module.scss'

const Registration: React.FC = () => {
    const heightContext = useContext(HeightLayout)

    return (
        <Box style={{ minHeight: heightContext.height }} className={classes.root}>
            <Box className='w-100 d-block d-sm-none'>
                <Box className={classes.bc}>
                    <Box style={{ minHeight: heightContext.height }}
                        className='d-flex flex-column justify-content-center align-items-center'>
                        <Box className={classes.title}>Welcome ✌️ to Justin</Box>
                        <Box className={classes.text}>You register as a company or person</Box>
                    </Box>
                </Box>
                <Box className='py-4'>
                    <div className='h5 text-center'>Select to Register</div>
                    <Link to='/register/company' className={classes.link}>
                        <Box className={classes.box}>
                            <Box className={classes.box__title}>Your a <span className='text-danger'>Company</span></Box>
                            <Box className={classes.box__text}>You register as a company</Box>
                        </Box>
                    </Link>
                    <div className='my-2'></div>
                    <Link to='/register/user' className={classes.link}>
                        <Box className={classes.box}>
                            <Box className={classes.box__title}>Your a <span className='text-danger'>Person</span></Box>
                            <Box className={classes.box__text}>You register as a person</Box>
                        </Box>
                    </Link>
                </Box>
            </Box>
            <Box className='d-none d-sm-block'>
                <Row className='w-100'>
                    <Col sm={6} className='w-100'>
                        <Box className={classes.bc}>
                            <Box style={{ minHeight: heightContext.height }}
                                className='d-flex flex-column justify-content-center align-items-center'>
                                <Box className={classes.title}>Welcome ✌️ to Justin</Box>
                                <Box className={classes.text}>You register as a company or person</Box>
                            </Box>
                        </Box>
                    </Col>
                    <Col sm={6}>
                        <Box className='h-100 d-flex flex-column justify-content-center'>
                            <div className='h5 text-center'>Select to Register</div>
                            <Link to='/registration/company' className={classes.link}>
                                <Box className={classes.box}>
                                    <Box className={classes.box__title}>Your a <span className='text-danger'>Company</span></Box>
                                    <Box className={classes.box__text}>You register as a company</Box>
                                </Box>
                            </Link>
                            <div className='my-2'></div>
                            <Link to='/registration/user' className={classes.link}>
                                <Box className={classes.box}>
                                    <Box className={classes.box__title}>Your a <span className='text-danger'>Person</span></Box>
                                    <Box className={classes.box__text}>You register as a person</Box>
                                </Box>
                            </Link>
                        </Box>
                    </Col>
                </Row>
            </Box>
        </Box>
    )
}

export default Registration