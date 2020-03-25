import React, { lazy, Suspense } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import Layout from '@/containers/Layout'
// This import connects hook with styles
import useStyles from './makeStyle'

const Tracking = lazy(() => import('@/components/Content/Tracking'))
const TrackingHistory = lazy(() => import('@/components/Content/TrackingHistory'))

const ErrorBoundary = lazy(() => import('@/components/Utils/ErrorBoundary'))

export const RouterTracking: React.FC = () => {
    const makeClasses = useStyles()

    return (
        <Layout>
            <Suspense fallback={
                <Backdrop className={makeClasses.backdrop} open={true}>
                    <CircularProgress color="primary" />
                </Backdrop>
            }>
                <ErrorBoundary>
                    <Tracking />
                </ErrorBoundary>
            </Suspense>
        </Layout>
    )
}

export const RouterTrackingHistory: React.FC = () => {
    const makeClasses = useStyles()

    return (
        <Layout>
            <Suspense fallback={
                <Backdrop className={makeClasses.backdrop} open={true}>
                    <CircularProgress color="primary" />
                </Backdrop>
            }>
                <ErrorBoundary>
                    <TrackingHistory />
                </ErrorBoundary>
            </Suspense>
        </Layout>
    )
}