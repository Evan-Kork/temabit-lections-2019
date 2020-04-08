import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUsers, faBookOpen, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import Breadcrumbs from '@/components/Navigation/Header/Toolbar/Breadcrumbs'
import Login from '@/components/Modal/Login'
import iRootState from '@/interfaces/iRootState'
import { actionLogout, actionInitLogin } from '@/actions/actionAuth'
import { getUser, getApiResult } from '@/selectors'

import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
    isAuth: getApiResult(state),
    user: getUser(state)
})
const mapDispatch = {
    actionLogout,
    actionInitLogin
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const ButtonPanel: React.FC<Props> = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (props.user) {
            if (sessionStorage.getItem('rp')) {
                props.actionInitLogin()
            }
        }
    }, [])

    return (
        <Box className={classes.root}>
            <Container className='w-100 d-flex flex-wrap justify-content-between align-items-center m-auto'>
                <Box className='d-flex'>
                    <Link className={classes.link} to='/private-office'>
                        <FontAwesomeIcon icon={faSignInAlt} />
                        Private office
                    </Link>
                    {props.user.accessibility === undefined ?
                        <>
                            <div className={classes.link} onClick={() => setIsOpen(!isOpen)}>
                                <FontAwesomeIcon icon={faUsers} />
                                Login
                            </div>
                            <Link className={classes.link} to='/registration'>
                                <FontAwesomeIcon icon={faBookOpen} />
                                Registration
                            </Link>
                        </>
                        :
                        <div className={classes.link} onClick={() => {
                            props.actionLogout()
                        }}>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Logout
                        </div>
                    }
                </Box>
                <Breadcrumbs />
                <Login isOpen={isOpen} setIsOpen={setIsOpen} />
            </Container>
        </Box >
    )
}

export default connector(ButtonPanel)