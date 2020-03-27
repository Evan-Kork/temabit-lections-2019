import React, { useContext } from 'react'

import { HeightLayout } from '@/context'
import classes from './index.module.scss'
// Interface indicates
// what parameters are in the component
interface iProps {
    children: React.ReactNode
}
const Backdrop: React.FC<iProps> = (props: iProps) => {
    const heightContext = useContext(HeightLayout)
    return (
        <div className={classes.backdrop} style={{ minHeight: heightContext.height }}>
            {props.children}
        </div>
    )
}

export default Backdrop