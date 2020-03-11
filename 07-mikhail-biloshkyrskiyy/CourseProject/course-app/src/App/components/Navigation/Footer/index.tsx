import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import Container from '@material-ui/core/Container'
import { Row, Col } from 'react-bootstrap'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhoneAlt,
    faEnvelopeOpenText
} from '@fortawesome/free-solid-svg-icons'

import iRootState from '@/interfaces/iRootState'
import iMenu, { MenuType } from '@/interfaces/iMenu'
import { MenuInvertoryData, MenuInvertoryVars, GET_MENU_INVERTORY } from './QueryIndex'
import { actionMenu } from '@/actions/actionMenu'
import Logotype from '@/components/Logotype'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({})

const mapDispatch = {
    actionMenu
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

interface iContactInfo {
    classInfo: string
    classSocial: string
}
const ContactInfo: React.FC<iContactInfo> = (props: iContactInfo) => {
    return (
        <>
            <Box className={props.classInfo}>
                <Box>
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    <Box className={classes.items}>0-800-301-661</Box>
                </Box>
                <div className="my-1"></div>
                <Box>
                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                    <Box className={classes.items}>test-justin@email.com</Box>
                </Box>
            </Box>
            <div className="my-2"></div>
            <Box className={props.classSocial}>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-messenger"></i>
            </Box>
        </>
    )
}

function itemLink(value: iMenu, key: number) {
    return <li key={key}>
        <Link className={classes.navLink} to={value.path}>{value.title}</Link>
    </li>
}

const Footer: React.FC<Props> = (props: Props) => {
    const { loading, data } = useQuery<MenuInvertoryData, MenuInvertoryVars>(GET_MENU_INVERTORY, { variables: { typeMenu: MenuType.Base }})
    props.actionMenu(loading, data?.menu as iMenu[])

    return (
        <>
            <Box className={classes.footer}>
                <Container>
                    <Row className='p-2'>
                        <Col xs={12} sm={6} md={3}>
                            <Box className={classes.logotype}>
                                <Logotype />
                            </Box>
                            <div className="my-2"></div>
                            <Box className={classes.shortInfo}>
                                500 entries in Ukraine. ⭐ Supermarkets and shopping malls.
                                Shvidka delivery. Grouchy count of the robot 7 days for a week.
                        </Box>
                            <div className="my-2"></div>
                            <Box display={{ xs: 'none', sm: 'block' }}>
                                <ContactInfo classInfo={classes.contackInfo} classSocial={classes.socialNetworks} />
                            </Box>
                        </Col>
                        <Col xs={12} sm={6} md={5}>
                            <Row>
                                <Col xs={6}>
                                    <p className={classes.title}>Quick links</p>
                                    <ul>
                                        {data?.menu.map((value: iMenu, index: number) => {
                                            return index < 8 ? itemLink(value, index) : null
                                        })}
                                    </ul>
                                </Col>
                                <Col xs={6}>
                                    <p className={classes.title}>Informations</p>
                                    <ul>
                                        {data?.menu.map((value: iMenu, index: number) => {
                                            return index >= 8 ? itemLink(value, index) : null
                                        })}
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <p className={classes.title}>Contact US</p>
                            <TextField
                                className={classes.inputEmail}
                                id="filled-required"
                                label="Your email address"
                                variant="filled"
                                type="email"
                            />
                            <div className="my-1"></div>
                            <TextField
                                className={classes.inputTextArea}
                                multiline
                                rows="4"
                                id="filled-required"
                                label="Message..."
                                variant="filled"
                            />
                            <div className="my-1"></div>
                            <Button
                                type="submit"
                                className="w-50 m-auto d-block"
                                variant="contained"
                                color="primary">
                                <i className="fab fa-telegram-plane mr-2"></i>
                                Send
                        </Button>
                        </Col>
                    </Row>
                    <Box className="my-3" display={{ xs: 'block', sm: 'none' }}>
                        <ContactInfo classInfo={`${classes.contackInfo} ${classes.contackInfoSM}`} classSocial={`${classes.socialNetworks} ${classes.socialNetworkSM}`} />
                    </Box>
                </Container>
                <Box className={classes.codingPoets}>
                    <Box className={classes.text}>@Coding Poets | Biloshkyrskyi Mikhail</Box>
                </Box>
            </Box>
        </>
    )
}

export default connector(Footer)