import React, { useContext, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'

import iRootState from '@/interfaces/iRootState'
import iMenu, { MenuType } from '@/interfaces/iMenu'
import { iDeclaration } from '@/interfaces/iTracking'
import {
    actionMenuTracking,
    actionInitTracking,
    actionTracking
} from '@/actions/actionTracking'
import {
    getTracking,
    getDeclaration
} from '@/selectors'
import { MenuInvertoryData, MenuInvertoryVars, GET_MENU_INVERTORY } from './Query'
import Menu from '@/components/Navigation/Menu'
import TrackingProduct from '@/components/Tracking'
import Input from '@/components/Utils/Input'
import { HeightLayout } from '@/context'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
    tracking: getTracking(state),
    declaration: getDeclaration(state)
})

const mapDispatch = {
    actionMenuTracking,
    actionInitTracking,
    actionTracking
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const initialValues = {
    declaration: ''
}
const Tracking: React.FC<Props> = (props: Props) => {
    const { loading, data } = useQuery<MenuInvertoryData, MenuInvertoryVars>(GET_MENU_INVERTORY, { variables: { type: MenuType.Declaration } })
    props.actionMenuTracking(loading, data?.menu as iMenu[])
    const heightContext = useContext(HeightLayout)
    useEffect(() => {
        if (props.tracking[0] === undefined) {
            if (sessionStorage.getItem('tracking')) {
                props.actionInitTracking()
            } else if (props.declaration.declaration !== undefined) {
                props.actionTracking(props.declaration)
            } else if (JSON.parse(sessionStorage.getItem('declaration') as string) as iDeclaration !== null) {
                props.actionTracking(JSON.parse(sessionStorage.getItem('declaration') as string) as iDeclaration)
            }
        }
    }, [])

    return (
        <Container>
            <Box className={`${classes.root} d-flex flex-column flex-lg-row`} style={{ minHeight: heightContext.height }}>
                <Menu menu={data?.menu as iMenu[]} />
                <Box className={`${classes.content} d-flex flex-column w-100`}>
                    <Box className='my-1'>
                        <Input
                            name='declaration'
                            placeholder={'Declaration number'}
                            initialValues={initialValues}
                            classes={classes.input}
                            callback={(values: iDeclaration) => {
                                props.actionTracking(values)
                            }}
                        />
                    </Box>
                    <Box className='h-100 d-flex'>
                        {
                            props.tracking[0] ? <TrackingProduct tracking={props.tracking[0]} /> :
                                <div className={classes.backdrop}>
                                    <CircularProgress color="primary" />
                                </div>
                        }
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default connector(Tracking)