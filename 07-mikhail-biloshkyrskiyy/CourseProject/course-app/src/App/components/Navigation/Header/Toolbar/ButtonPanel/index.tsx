import React, { useState } from 'react'
import Cookie from 'js-cookie'
import { connect, ConnectedProps } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUsers, faBookOpen, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import Breadcrumbs from '@/components/Navigation/Header/Toolbar/Breadcrumbs'
import Login from '@/components/Modal/Login'
import iRootState from '@/interfaces/iRootState'
import { actionLogout } from '@/actions/actionAuth'

import classes from './index.module.scss'

const mapState = (state: iRootState) => ({})
const mapDispatch = {
    actionLogout
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const ButtonPanel: React.FC<Props> = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isCookie, setIsCookie] = useState(Cookie.get('jwt') !== '')

    return (
        <Box className={classes.root}>
            <Container className='w-100 d-flex flex-wrap justify-content-between align-items-center m-auto'>
                <Box className='d-flex'>
                    <Link className={classes.link} to='/office'>
                        <FontAwesomeIcon icon={faSignInAlt} />
                        Private office
                    </Link>
                    {isCookie ?
                        <div className={classes.link} onClick={() => setIsOpen(!isOpen)}>
                            <FontAwesomeIcon icon={faUsers} />
                            Login
                        </div>
                        :
                        <div className={classes.link} onClick={() => {
                            props.actionLogout()
                            setIsCookie(Cookie.get('jwt') !== '')
                        }}>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Logout
                        </div>
                    }
                    <Link className={classes.link} to='/registration'>
                        <FontAwesomeIcon icon={faBookOpen} />
                        Registration
                    </Link>
                </Box>
                <Breadcrumbs />
                <Login isOpen={isOpen} setIsOpen={setIsOpen} setIsCookie={setIsCookie} />
            </Container>
        </Box >
    )
}

export default connector(ButtonPanel)