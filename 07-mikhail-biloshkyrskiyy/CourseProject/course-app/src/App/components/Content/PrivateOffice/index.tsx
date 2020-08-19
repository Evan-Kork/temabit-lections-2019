import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'

import iMenu, { MenuType } from '@/interfaces/iMenu'
import { MenuInvertoryData, MenuInvertoryVars, GET_MENU_INVERTORY } from './Query'
import Menu from '@/components/Navigation/Menu'
import { HeightLayout } from '@/context'
import classes from './index.module.scss'

const PrivateOffice: React.FC = () => {
    const heightContext = useContext(HeightLayout)
    const { loading, data } = useQuery<MenuInvertoryData, MenuInvertoryVars>(GET_MENU_INVERTORY, { variables: { type: MenuType.PrivateOffice } })

    return (
        <Container>
            <Box className='d-flex flex-column flex-lg-row' style={{ minHeight: heightContext.height }}>
                <Menu menu={data?.menu as iMenu[]} />
                <Box className={`${classes.content} d-flex flex-column w-100`}>
                    <Box className='h-100 d-flex'>
                        <div className={classes.backdrop}>
                            <CircularProgress color="primary" />
                        </div>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default PrivateOffice