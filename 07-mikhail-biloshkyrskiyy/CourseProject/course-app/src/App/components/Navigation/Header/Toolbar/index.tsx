import React, { useEffect, useRef } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Container from '@material-ui/core/Container'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import { Toolbar as ToolbarMaterial } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Box from '@material-ui/core/Box'

import ButtonPanel from '@/components/Navigation/Header/Toolbar/ButtonPanel'
import Tracking from '@/components/Navigation/Header/Toolbar/Tracking'
import Input from '@/components/Utils/Input'
import Logotype from '@/components/Logotype'

import iRootState from '@/interfaces/iRootState'
import { iDeclaration } from '@/interfaces/iTracking'
import { actionTracking } from '@/actions/actionTracking'

// This import connects hook with styles
import useStyles from './makeStyle'

const mapState = (state: iRootState) => ({})
const mapDispatch = {
    actionTracking
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux
// Interface indicates
// what parameters are in the component
interface iProps {
    stateOpen: boolean
    setIsOpen: Function
    setHeight: Function
}

const initialValues = {
    declaration: ''
}

const Toolbar: React.FC<iProps & Props> = (props: iProps & Props) => {
    const makeClasses = useStyles()
    const refToolbar = useRef(null)

    const handleDrawerOpen = () => {
        props.setIsOpen(true)
    }

    // Updates the state media.
    // Enhances the resize event
    // And removes the event with a DOM components reboot
    useEffect(() => {
        //@ts-ignore
        props.setHeight(refToolbar.current.offsetHeight)

        const handleResize = () => {
            //@ts-ignore
            props.setHeight(refToolbar.current.offsetHeight)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <AppBar
            position="fixed"
            className={clsx(makeClasses.appBar, {
                [makeClasses.appBarShift]: props.stateOpen,
            })}
        >
            <div ref={refToolbar}>
                <Container>
                    <ToolbarMaterial className='d-flex justify-content-between align-items-center'>
                        <Logotype />
                        <Box className='d-flex align-items-center'>
                            <Box display={{ xs: 'none', md: 'block' }}>
                                <Input
                                    name='declaration'
                                    placeholder={'Declaration number'}
                                    initialValues={initialValues}
                                    redirect='/tracking'
                                    callback={(values: any) => {
                                        props.actionTracking(values as iDeclaration)
                                    }}
                                />
                            </Box>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerOpen}
                                className={clsx(props.stateOpen && makeClasses.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </ToolbarMaterial>
                </Container>
                <Box display={{ xs: 'block', md: 'none' }}>
                    <Tracking placeholder={'Declaration number'} />
                </Box>
                <ButtonPanel />
            </div>
        </AppBar>
    )
}

export default connector(Toolbar)