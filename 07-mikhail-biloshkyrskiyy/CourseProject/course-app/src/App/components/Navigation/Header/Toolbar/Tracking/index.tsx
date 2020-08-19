import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import iRootState from '@/interfaces/iRootState'
import { iDeclaration } from '@/interfaces/iTracking'
import { actionTracking } from '@/actions/actionTracking'

import Input from '@/components/Utils/Input'

const mapState = (state: iRootState) => ({})
const mapDispatch = {
    actionTracking
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
    placeholder: string
}

const initialValues = {
    declaration: ''
}

const Tracking: React.FC<iProps & Props> = (props: iProps & Props) => {
    return (
        <Box className={`w-100`}>
            <Container className='py-1'>
                <Input
                    name='declaration'
                    placeholder={props.placeholder}
                    initialValues={initialValues}
                    redirect='/tracking'
                    callback={(values: any) => props.actionTracking(values as iDeclaration)}
                />
            </Container>
        </Box>
    )
}

export default connector(Tracking)