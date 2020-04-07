import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'

import iRootState from '@/interfaces/iRootState'
import { getUser } from '@/selectors'

const mapState = (state: iRootState) => ({
    user: getUser(state)
})
const mapDispatch = {}

const connector = connect(
    mapState,
    mapDispatch
)
// Interface indicates
// what parameters are in the component
interface iProps {
    children: React.ReactNode
}
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & iProps
const Private: React.FC<Props> = (props: Props) => {
    return (
        <>
            {props.user.accessibility ? props.children : <Redirect to='/' />}
        </>
    )
}

export default connector(Private)