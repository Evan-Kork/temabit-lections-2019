import React, { useEffect, useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { format } from 'date-fns'
import Box from '@material-ui/core/Box'

import { HeightLayout } from '@/context'

import { iErrorInvertory, ADD_ERROR_INVERTORY } from './Query'
import Paper from '@/components/Utils/Paper'

// Interface indicates
// what parameters are in the component
interface iPropsErrorBoundary {
    children: React.ReactNode
    title: string
    info: string
    date: string
}
const ErrorBoundary: React.FC<iPropsErrorBoundary> = (props: iPropsErrorBoundary) => {
    const heightContext = useContext(HeightLayout)
    const [addError] = useMutation<iErrorInvertory>(ADD_ERROR_INVERTORY)

    useEffect(() => {
        if (props.title !== '') {
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
// Interface indicates
// what parameters are in the component
interface iPropsСomponentDidCatch {
    children: React.ReactNode
}
export default class СomponentDidCatch extends React.Component<iPropsСomponentDidCatch> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
            info: '',
            date: '',
            hasError: false
        }
    }

    static getDerivedStateFromError(error: Error) {
        return {
            title: error.message,
            info: error.stack,
            date: format(new Date, 'kk-mm-ss dd-MM-yyyy'),
            hasError: true
        };
    }

    render() {
        //@ts-ignore
        const { title, info, date, hasError } = this.state

        if (hasError) {
            return <ErrorBoundary title={title} info={info} date={date}>
                <Paper
                    title="Uhoh!Server error, 500!!!! Please contact the administrator to continue."
                    supTitle="At this point, we're doing everything we can to resolve this issue."
                />
            </ErrorBoundary>
        }

        return this.props.children
    }
}