import React, { useState } from 'react'

import Menu from '@/components/Navigation/Header/Menu'
import Toolbar from '@/components/Navigation/Header/Toolbar'

// Interface indicates
// what parameters are in the component
interface iProps {
    stateHeight: number
    setStateHeight: Function
}
const Header: React.FC<iProps> = (props: iProps) => {
    const [open, setIsOpen] = useState(false)

    return (
        <>
            <Menu stateHeight={props.stateHeight} stateOpen={open} setIsOpen={setIsOpen} />
            <Toolbar setHeight={props.setStateHeight} stateOpen={open} setIsOpen={setIsOpen} />
        </>
    )
}

export default Header