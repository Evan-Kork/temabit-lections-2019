import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'

import { iUser } from '@/interfaces/iAuth'
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
const router = (user: iUser, children: React.ReactNode) => (
    <>
        {user.accessibility === 'Administrator' || user.accessibility === 'Moderator' ? children : <Redirect to='/' />}
    </>
)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & iProps
const Admin: React.FC<Props> = (props: Props) => {
    return (
        <>
            {props.user.accessibility ? router(props.user, props.children) : <Redirect to='/' />}
        </>
    )
}

export default connector(Admin)