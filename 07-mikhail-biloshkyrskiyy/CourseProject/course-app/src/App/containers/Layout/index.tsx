import React, { useRef, useState, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Box from '@material-ui/core/Box'
import Alert from '@material-ui/lab/Alert'

import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'

import iRootState from '@/interfaces/iRootState'
import { actionReloadingToken } from '@/actions/actionAuth'
import {
    getToken,
    getApiResult
} from '@/selectors'

import { HeightLayout } from '@/context'
// This import connects hook with styles
import useStyles from './makeStyle'
import classes from './index.module.scss'
// Interface indicates
// what parameters are in the component
const mapState = (state: iRootState) => ({
    token: getToken(state),
    isReloadingToken: getApiResult(state)
})
const mapDispatch = { actionReloadingToken }

const connector = connect(
    mapState,
    mapDispatch
)
interface iProps {
    children?: React.ReactNode
}
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & iProps

const Layout: React.FC<Props> = (props: Props) => {
    const makeClasses = useStyles()
    const refFooter = useRef(null)

    const [stateHeightHeader, setStateHeightHeader] = useState(0)

    const [stateRefHeader, setStateRefHeader] = useState(0)
    const [stateRefFooter, setStateRefFooter] = useState(0)
    // Updates the state media.
    // Enhances the resize event
    // And removes the event with a DOM components reboot
    useEffect(() => {
        //@ts-ignore
        setStateRefHeader(stateHeightHeader)
        //@ts-ignore
        setStateRefFooter(refFooter.current.offsetHeight)

        const handleResize = () => {
            //@ts-ignore
            setStateRefHeader(stateHeightHeader)
            //@ts-ignore
            setStateRefFooter(refFooter.current.offsetHeight)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [stateHeightHeader])

    useEffect(() => {
        if (props.token !== undefined) {
            if (props.token.time && props.token.time !== 0) {
                setTimeout(() => {
                    props.actionReloadingToken()
                }, props.token.time)
            }
        }
    }, [props.token])

    return (
        <>
            <Header stateHeight={stateHeightHeader} setStateHeight={setStateHeightHeader} />
            <Box className={makeClasses.root}>
                <main>
                    {props.isReloadingToken.success && !props.isReloadingToken.success && <Alert severity="error" className={classes.alert}>{props.isReloadingToken.message}</Alert>}
                    <HeightLayout.Provider value={{ height: `calc(100vh - (${stateRefHeader}px + ${stateRefFooter}px) - 1px)` }}>
                        {props.children}
                    </HeightLayout.Provider>
                </main>
            </Box>
            <div ref={refFooter}>
                <Footer />
            </div>
        </>
    )
}

export default connector(Layout)