import React, { lazy, Suspense } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import Layout from '@/containers/Layout'
import Backdrop from '@/components/Utils/Backdrop'

const Tracking = lazy(() => import('@/components/Content/Tracking'))
const TrackingHistory = lazy(() => import('@/components/Content/TrackingHistory'))

const ErrorBoundary = lazy(() => import('@/components/Utils/ErrorBoundary'))

export const RouterTracking: React.FC = () => {
    return (
        <Layout>
            <Suspense fallback={
                <Backdrop>
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
    return (
        <Layout>
            <Suspense fallback={
                <Backdrop>
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