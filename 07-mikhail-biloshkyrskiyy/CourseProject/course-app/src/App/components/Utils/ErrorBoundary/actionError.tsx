import React, { useEffect, useContext } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useMutation } from '@apollo/react-hooks'
import Box from '@material-ui/core/Box'

import iRootState from '@/interfaces/iRootState'
import { iError } from '@/interfaces/iError'
import { actionError } from '@/actions/actionError'

import { iErrorInvertory, ADD_ERROR_INVERTORY } from './Query'
import { HeightLayout } from '@/context'

const mapState = (state: iRootState) => ({})
const mapDispatch = {
    actionError
}

const connector = connect(
    mapState,
    mapDispatch
)
// Interface indicates
// what parameters are in the component
interface iPropsErrorBoundary {
    children: React.ReactNode
    title: string
    info: string
    date: string
}
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & iPropsErrorBoundary
const ErrorBoundary: React.FC<Props> = (props: Props) => {
    const heightContext = useContext(HeightLayout)
    const [addError] = useMutation<iErrorInvertory>(ADD_ERROR_INVERTORY)

    useEffect(() => {
        if (props.title !== '') {
            props.actionError({
                title: props.title,
                info: props.info,
                date: props.date
            } as iError)

            addError({
                variables: {
                    "error": {
                        title: props.title,
                        info: props.info,
                        date: props.date
                    }
                }
            })
        }
    }, [])

    return (
        <Box style={{ minHeight: heightContext.height }}>
            {props.children}
        </Box>
    )
}
export default connector(ErrorBoundary)