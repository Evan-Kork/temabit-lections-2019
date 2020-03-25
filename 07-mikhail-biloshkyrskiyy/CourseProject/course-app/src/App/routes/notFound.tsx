import React, { lazy, Suspense } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import Layout from '@/containers/Layout'
// This import connects hook with styles
import useStyles from './makeStyle'

const Paper = lazy(() => import('@/components/Utils/Paper'))
const ErrorBoundary = lazy(() => import('@/components/Utils/ErrorBoundary'))

export const NotFound: React.FC = () => {
    const makeClasses = useStyles()

    return (
        <Layout>
            <Suspense fallback={
                <Backdrop className={makeClasses.backdrop} open={true}>
                    <CircularProgress color="primary" />
                </Backdrop>
            }>
                <ErrorBoundary>
                    <Paper
                        title="The page not found!!! you're asking for doesn't exist."
                        supTitle="Page you're asking for doesn't exist."
                    />
                </ErrorBoundary>
            </Suspense >
        </Layout>
    )
}