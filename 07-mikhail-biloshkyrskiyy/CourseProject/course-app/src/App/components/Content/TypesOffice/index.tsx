import React, { useContext, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import iRootState from '@/interfaces/iRootState'
import iMenu, { MenuType } from '@/interfaces/iMenu'
import {
    actionMenuBranch,
    actionBranchTypes,
    actionInitBranchTypes
} from '@/actions/actionBranch'
import {
    getLocation,
    getBranchTypes
} from '@/selectors'
import { MenuInvertoryData, MenuInvertoryVars, GET_MENU_INVERTORY } from './Query'
import Menu from '@/components/Navigation/Menu'
import BranchTypes from '@/components/BranchTypes'
import { HeightLayout } from '@/context'
import classes from './index.module.scss'
// This import connects hook with styles
import useStyles from './makeStyle'

const mapState = (state: iRootState) => ({
    location: getLocation(state),
    branchTypes: getBranchTypes(state)
})

const mapDispatch = {
    actionMenuBranch,
    actionBranchTypes,
    actionInitBranchTypes
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const TypesOffice: React.FC<Props> = (props: Props) => {
    const makeClasses = useStyles()
    const { loading, data } = useQuery<MenuInvertoryData, MenuInvertoryVars>(GET_MENU_INVERTORY, { variables: { type: MenuType.Office } })
    props.actionMenuBranch(loading, data?.menu as iMenu[])

    const heightContext = useContext(HeightLayout)
    useEffect(() => {
        if (props.branchTypes[0] === undefined) {
            if (sessionStorage.getItem('branchTypes')) {
                props.actionInitBranchTypes()
            } else {
                props.actionBranchTypes()
            }
        }
    }, [])

    return (
        <Container>
            <Box className='d-flex flex-column flex-lg-row' style={{ minHeight: heightContext.height }}>
                <Menu menu={data?.menu as iMenu[]} />
                <Box className={`${classes.content} d-flex h-100 flex-column w-100`}>
                    {
                        props.branchTypes[0] ? <BranchTypes branchTypes={props.branchTypes} /> :
                            <Backdrop className={makeClasses.backdrop} open={true}>
                                <CircularProgress color="primary" />
                            </Backdrop>
                    }
                </Box>
            </Box>
        </Container>
    )
}

export default connector(TypesOffice)