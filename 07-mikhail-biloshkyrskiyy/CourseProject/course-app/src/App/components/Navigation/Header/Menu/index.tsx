import React from 'react'
import { Link } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import { useTheme } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import iRootState from '@/interfaces/iRootState'
import iMenu, { MenuType } from '@/interfaces/iMenu'
import { MenuInvertoryData, MenuInvertoryVars, GET_MENU_INVERTORY } from './Query'
import { actionMenu } from '@/actions/actionMenu'
// This import connects hook with styles
import useStyles from './makeStyle'
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

// Interface indicates
// what parameters are in the component
interface iProps {
    stateOpen: boolean
    setIsOpen: Function
    stateHeight: number
}

const Menu: React.FC<iProps & Props> = (props: iProps & Props) => {
    const makeClasses = useStyles()
    const theme = useTheme()

    const handleDrawerClose = () => {
        props.setIsOpen(false)
    }

    const { loading, data } = useQuery<MenuInvertoryData, MenuInvertoryVars>(GET_MENU_INVERTORY, { variables: { type: MenuType.Base } })
    props.actionMenu(loading, data?.menu as iMenu[])
    return (
        <Drawer
            className={`${makeClasses.drawer}`}
            variant="persistent"
            anchor="right"
            open={props.stateOpen}
            style={{ height: props.stateHeight }}
            classes={{
                paper: makeClasses.drawerPaper,
            }}
        >
            <div className={makeClasses.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {data?.menu.map((value: iMenu, index: number) => {
                    const path: string[] = []
                    value.path.split('/').map((value: string) => {
                        value !== '' && path.push(`/${value}`)
                    })
                    return (
                        <ListItem button key={index} className={classes.listItem}>
                            <Link to={path.join('')}>
                                <i className={value.icon} />
                                <ListItemText primary={value.title} />
                            </Link>
                        </ListItem>
                    )
                })}
            </List>
        </Drawer>
    )
}

export default connector(Menu)