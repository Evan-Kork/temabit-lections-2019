import React from 'react'
import { format } from 'date-fns'

import ErrorBoundary from './actionError'
import Paper from '@/components/Utils/Paper'

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