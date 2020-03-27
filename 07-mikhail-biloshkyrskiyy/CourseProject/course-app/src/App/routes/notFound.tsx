import React, { lazy, Suspense } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import Layout from '@/containers/Layout'
import Backdrop from '@/components/Utils/Backdrop'

const Paper = lazy(() => import('@/components/Utils/Paper'))
const ErrorBoundary = lazy(() => import('@/components/Utils/ErrorBoundary'))

export const NotFound: React.FC = () => {
    return (
        <Layout>
            <Suspense fallback={
                <Backdrop>
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