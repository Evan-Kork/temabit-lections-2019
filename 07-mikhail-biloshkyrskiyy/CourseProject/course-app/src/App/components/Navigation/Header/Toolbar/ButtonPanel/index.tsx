import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUsers, faBookOpen } from '@fortawesome/free-solid-svg-icons'

import Breadcrumbs from '@/components/Navigation/Header/Toolbar/Breadcrumbs'
import Login from '@/components/Modal/Login'

import classes from './index.module.scss'

const ButtonPanel = () => {
    const [isOpenLogin, setIsOpenLogin] = useState(false)

    return (
        <Box className={classes.root}>
            <Container className='w-100 d-flex flex-wrap justify-content-between align-items-center m-auto'>
                <Box className='d-flex'>
                    <Link className={classes.link} to='/office'>
                        <FontAwesomeIcon icon={faSignInAlt} />
                        Private office
                    </Link>
                    <div className={classes.link} onClick={() => !isOpenLogin && setIsOpenLogin(true)}>
                        <FontAwesomeIcon icon={faUsers} />
                        Login
                        <Login isOpen={isOpenLogin} setIsOpen={setIsOpenLogin} />
                    </div>
                    <Link className={classes.link} to='/registration'>
                        <FontAwesomeIcon icon={faBookOpen} />
                        Registration
                    </Link>
                </Box>
                <Breadcrumbs />
            </Container>
        </Box>
    )
}

export default ButtonPanel