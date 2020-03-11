import React from 'react'
import { Link } from 'react-router-dom'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'

import iMenu from '@/interfaces/iMenu'
// This import connects hook with styles
import useStyles from './makeStyle'
import classes from './index.module.scss'

interface iProps {
    menu: iMenu[]
}
const Menu: React.FC<iProps> = (props: iProps) => {
    const makeClasses = useStyles()

    return (
        <Paper className={`${makeClasses.root} w-auto`}>
            <MenuList>
                {props.menu && props.menu.map((value: iMenu, index: number) => getMenuItem(value, index))}
            </MenuList>
        </Paper>
    )
}

function getMenuItem(value: iMenu, key: number) {
    const path: string[] = []
    value.path.split('/').map((value: string) => {
        value !== '' && path.push(`/${value}`)
    })
    return (
        <MenuItem key={key} className={classes.root}>
            <i className={value.icon} />
            <Link to={path.join('')}>{value.title}</Link>
        </MenuItem>
    )
}

export default Menu