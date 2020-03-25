import React, { lazy, Suspense } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import Layout from '@/containers/Layout'
// This import connects hook with styles
import useStyles from './makeStyle'

const Office = lazy(() => import('@/components/Content/Office'))
const TypesOffice = lazy(() => import('@/components/Content/TypesOffice'))
const Location = lazy(() => import('@/components/Content/Map'))
const Localities = lazy(() => import('@/components/Content/Localities'))

const ErrorBoundary = lazy(() => import('@/components/Utils/ErrorBoundary'))

export const RouterOffice: React.FC = () => {
    const makeClasses = useStyles()

    return (
        <Layout>
            <Suspense fallback={
                <Backdrop className={makeClasses.backdrop} open={true}>
                    <CircularProgress color="primary" />
                </Backdrop>
            }>
                <ErrorBoundary>
                    <Office />
                </ErrorBoundary>
            </Suspense>
        </Layout>
    )
}

export const RouterOfficeTypes: React.FC = () => {
    const makeClasses = useStyles()

    return (
        <Layout>
            <Suspense fallback={
                <Backdrop className={makeClasses.backdrop} open={true}>
                    <CircularProgress color="primary" />
                </Backdrop>
            }>
                <ErrorBoundary>
                    <TypesOffice />
                </ErrorBoundary>
            </Suspense>
        </Layout>
    )
}

export const RouterOfficeLocation: React.FC = () => {
    const makeClasses = useStyles()

    return (
        <Layout>
            <Suspense fallback={
                <Backdrop className={makeClasses.backdrop} open={true}>
                    <CircularProgress color="primary" />
                </Backdrop>
            }>
                <ErrorBoundary>
                    <Location />
                </ErrorBoundary>
            </Suspense>
        </Layout>
    )
}

export const RouterOfficeLocalities: React.FC = () => {
    const makeClasses = useStyles()

    return (
        <Layout>
            <Suspense fallback={
                <Backdrop className={makeClasses.backdrop} open={true}>
                    <CircularProgress color="primary" />
                </Backdrop>
            }>
                <ErrorBoundary>
                    <Localities />
                </ErrorBoundary>
            </Suspense>
        </Layout>
    )
}