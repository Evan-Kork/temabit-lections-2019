import React, { lazy, Suspense } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import Layout from '@/containers/Layout'
// This import connects hook with styles
import useStyles from './makeStyle'

const Registration = lazy(() => import('@/components/Content/Registration'))
const UserRegistration = lazy(() => import('@/components/Content/Registration/User'))

const ErrorBoundary = lazy(() => import('@/components/Utils/ErrorBoundary'))

export const RouterRegistration: React.FC = () => {
    const makeClasses = useStyles()

    return (
        <Layout>
            <Suspense fallback={
                <Backdrop className={makeClasses.backdrop} open={true}>
                    <CircularProgress color="primary" />
                </Backdrop>
            }>
                <ErrorBoundary>
                    <Registration />
                </ErrorBoundary>
            </Suspense >
        </Layout>
    )
}

export const RouterUserRegistration: React.FC = () => {
    const makeClasses = useStyles()

    return (
        <Layout>
            <Suspense fallback={
                <Backdrop className={makeClasses.backdrop} open={true}>
                    <CircularProgress color="primary" />
                </Backdrop>
            }>
                <ErrorBoundary>
                    <UserRegistration />
                </ErrorBoundary>
            </Suspense>
        </Layout>
    )
}