import React, { useContext, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

import iRootState from '@/interfaces/iRootState'
import iMenu, { MenuType } from '@/interfaces/iMenu'
import { iLocation } from '@/interfaces/iBranch'
import {
    actionMenuBranch,
    actionBranchAll,
    actionBranchArray,
    actionInitBranch
} from '@/actions/actionBranch'
import {
    getLocation,
    getBranches
} from '@/selectors'
import { MenuInvertoryData, MenuInvertoryVars, GET_MENU_INVERTORY } from './QueryIndex'
import Menu from '@/components/Navigation/Menu'
import Location from '@/components/Location'
import Paper from '@/components/Utils/Paper'
import { HeightLayout } from '@/context'
import classes from './index.module.scss'
// This import connects hook with styles
import useStyles from './makeStyle'

const mapState = (state: iRootState) => ({
    location: getLocation(state),
    branches: getBranches(state)
})

const mapDispatch = {
    actionMenuBranch,
    actionBranchAll,
    actionBranchArray,
    actionInitBranch
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const Map: React.FC<Props> = (props: Props) => {
    const makeClasses = useStyles()
    const { loading, data } = useQuery<MenuInvertoryData, MenuInvertoryVars>(GET_MENU_INVERTORY, { variables: { type: MenuType.Office } })
    props.actionMenuBranch(loading, data?.menu as iMenu[])
    const heightContext = useContext(HeightLayout)
    useEffect(() => {
        if (props.branches[0] === undefined) {
            if (sessionStorage.getItem('branch')) {
                props.actionInitBranch()
            } else if (props.location.location !== undefined) {
                props.actionBranchArray(Object.values(props.location))
            } else if (JSON.parse(sessionStorage.getItem('location') as string) as iLocation !== null) {
                props.actionBranchArray(Object.values(JSON.parse(sessionStorage.getItem('location') as string) as iLocation))
            } else {
                props.actionBranchAll()
            }
        }
    }, [])

    const handlerOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        try {
            props.actionBranchArray(event.target.value.split(','))
        } catch (error) { }
    }

    return (
        <Container>
            <Box className='d-flex flex-column flex-lg-row' style={{ minHeight: heightContext.height }}>
                <Menu menu={data?.menu as iMenu[]} />
                <Box className={`${classes.content} d-flex flex-column w-100`}>
                    <Box className={`${makeClasses.search} my-1`}>
                        <Box className={makeClasses.searchIcon}>
                            <SearchIcon />
                        </Box>
                        <InputBase
                            name='location'
                            onChange={handlerOnChange}
                            placeholder={'Branche location'}
                            classes={{
                                root: makeClasses.inputRoot,
                                input: makeClasses.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Box>
                    <Box className='h-100 d-flex'>
                        {props.branches[0] ? <Location branch={props.branches[0]} /> : <Paper title="Uhoh! There's not a single branche location." supTitle="Enter branche location." />}
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default connector(Map)