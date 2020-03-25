import React, { useRef, useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'

import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'

import { HeightLayout } from '@/context'
// This import connects hook with styles
import useStyles from './makeStyle'
// Interface indicates
// what parameters are in the component
interface iProps {
    children?: React.ReactNode
}

const Layout: React.FC<iProps> = (props: iProps) => {
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

    return (
        <>
            <Header stateHeight={stateHeightHeader} setStateHeight={setStateHeightHeader} />
            <Box className={makeClasses.root}>
                <main>
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

export default Layout