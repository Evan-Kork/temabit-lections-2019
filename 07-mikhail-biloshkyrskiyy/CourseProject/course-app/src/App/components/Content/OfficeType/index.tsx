import React, { useContext, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'

import iRootState from '@/interfaces/iRootState'
import iMenu, { MenuType } from '@/interfaces/iMenu'
import {
    actionMenuOffice,
    actionOfficeTypes,
    actionInitOfficeTypes
} from '@/actions/actionOffice'
import {
    getLocation,
    getOfficeTypes
} from '@/selectors'
import { MenuInvertoryData, MenuInvertoryVars, GET_MENU_INVERTORY } from './Query'
import Menu from '@/components/Navigation/Menu'
import OfficeTypeTable from '@/components/Content/OfficeType/Table'
import { HeightLayout } from '@/context'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
    location: getLocation(state),
    branchTypes: getOfficeTypes(state)
})

const mapDispatch = {
    actionMenuOffice,
    actionOfficeTypes,
    actionInitOfficeTypes
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const OfficeType: React.FC<Props> = (props: Props) => {
    const { loading, data } = useQuery<MenuInvertoryData, MenuInvertoryVars>(GET_MENU_INVERTORY, { variables: { type: MenuType.Office } })
    props.actionMenuOffice(loading, data?.menu as iMenu[])

    const heightContext = useContext(HeightLayout)
    useEffect(() => {
        if (props.branchTypes[0] === undefined) {
            if (sessionStorage.getItem('branchTypes')) {
                props.actionInitOfficeTypes()
            } else {
                props.actionOfficeTypes()
            }
        }
    }, [])

    return (
        <Container>
            <Box className='d-flex flex-column flex-lg-row' style={{ minHeight: heightContext.height }}>
                <Menu menu={data?.menu as iMenu[]} />
                <Box className={`${classes.content} d-flex h-100 flex-column w-100`}>
                    {
                        props.branchTypes[0] ? <OfficeTypeTable branchTypes={props.branchTypes} /> :
                            <div className={classes.backdrop}>
                                <CircularProgress color="primary" />
                            </div>
                    }
                </Box>
            </Box>
        </Container>
    )
}

export default connector(OfficeType)