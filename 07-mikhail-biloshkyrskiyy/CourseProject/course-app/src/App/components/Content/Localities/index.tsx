import React, { useContext, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

import iRootState from '@/interfaces/iRootState'
import iMenu, { MenuType } from '@/interfaces/iMenu'
import { iLocation, iLocalities, LocalitiesType } from '@/interfaces/iBranch'
import {
    actionMenuBranch,
    actionLocalities,
    actionInitLocalities,
    actionLocalitiesSelect
} from '@/actions/actionBranch'
import {
    getLocalities,
    getLocalitiesSelect
} from '@/selectors'
import { MenuInvertoryData, MenuInvertoryVars, GET_MENU_INVERTORY } from './QueryIndex'
import Menu from '@/components/Navigation/Menu'
import LocalitiesOffice from '@/components/Localities'
import Paper from '@/components/Utils/Paper'
import { HeightLayout } from '@/context'
import classes from './index.module.scss'
// This import connects hook with styles
import useStyles from './makeStyle'

const mapState = (state: iRootState) => ({
    localities: getLocalities(state),
    selected: getLocalitiesSelect(state)
})

const mapDispatch = {
    actionMenuBranch,
    actionLocalities,
    actionInitLocalities,
    actionLocalitiesSelect
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const Localities: React.FC<Props> = (props: Props) => {
    const makeClasses = useStyles()
    const { loading, data } = useQuery<MenuInvertoryData, MenuInvertoryVars>(GET_MENU_INVERTORY, { variables: { typeMenu: MenuType.Office } })
    props.actionMenuBranch(loading, data?.menu as iMenu[])
    const heightContext = useContext(HeightLayout)
    useEffect(() => {
        if (props.localities[0] === undefined) {
            if (sessionStorage.getItem('localities')) {
                props.actionInitLocalities()
            } else {
                props.actionLocalities(LocalitiesType.Base)
            }
        }
    }, [])

    const handleAllLocalities = () => {
        props.selected[0] && props.actionLocalitiesSelect([])
        props.actionLocalities(LocalitiesType.All)
    }
    const handleActivityLocalities = () => {
        props.selected[0] && props.actionLocalitiesSelect([])
        props.actionLocalities(LocalitiesType.Activity)
    }
    const handlerOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.actionLocalitiesSelect(filterLocalities({ location: event.target.value }))
    }
    const filterLocalities = (title: iLocation) => {
        const ua = props.localities.filter((value: iLocalities) => value.title_ua.toUpperCase().indexOf(title.location.toUpperCase(), 0) === 0)
        const ru = props.localities.filter((value: iLocalities) => value.title_ua.toUpperCase().indexOf(title.location.toUpperCase(), 0) === 0)
        const eu = props.localities.filter((value: iLocalities) => value.title_ua.toUpperCase().indexOf(title.location.toUpperCase(), 0) === 0)

        if (ua.length > 0) {
            return ua
        } else if (ru.length > 0) {
            return ru
        } else if (eu.length > 0) {
            return eu
        } else {
            return []
        }
    }
    const isSelected = () => {
        if (props.selected[0]) {
            return <LocalitiesOffice localities={props.selected} />
        } else if (props.localities[0]) {
            return <LocalitiesOffice localities={props.localities} />
        } else {
            return <Paper title="Uhoh! There's not a single branche location." supTitle="Enter branche location." />
        }
    }

    return (
        <Container>
            <Box className={`${classes.root} d-flex flex-column flex-lg-row`} style={{ minHeight: heightContext.height }}>>
                <Menu menu={data?.menu as iMenu[]} />
                <Box className={`${classes.content} d-flex flex-column w-100`}>
                    <Box className={`${makeClasses.search} my-1`}>
                        <Box className={makeClasses.searchIcon}>
                            <SearchIcon />
                        </Box>
                        <InputBase
                            name='localities'
                            onChange={handlerOnChange}
                            placeholder={'Branche location'}
                            classes={{
                                root: makeClasses.inputRoot,
                                input: makeClasses.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Box>
                    <Box className='mb-1 d-flex'>
                        <Button variant="contained" className='w-100' color="primary" onClick={handleAllLocalities}>All localities</Button>
                        <div className='mx-1'></div>
                        <Button variant="contained" className='w-100' color="primary" onClick={handleActivityLocalities}>Activity localities</Button>
                    </Box>
                    <Box className='h-100 d-flex'>
                        {isSelected()}
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default connector(Localities)