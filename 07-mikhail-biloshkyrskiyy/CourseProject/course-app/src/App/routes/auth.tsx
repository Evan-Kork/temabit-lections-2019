import React, { lazy, Suspense } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import Layout from '@/containers/Layout'
import Backdrop from '@/components/Utils/Backdrop'

const Registration = lazy(() => import('@/components/Content/Registration'))
const UserRegistration = lazy(() => import('@/components/Content/Registration/User'))
const CompanyRegistration = lazy(() => import('@/components/Content/Registration/Company'))

const ErrorBoundary = lazy(() => import('@/components/Utils/ErrorBoundary'))

export const RouterRegistration: React.FC = () => {
    return (
        <Layout>
            <Suspense fallback={
                <Backdrop>
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
    return (
        <Layout>
            <Suspense fallback={
                <Backdrop>
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

export const RouterCompanyRegistration: React.FC = () => {
    return (
        <Layout>
            <Suspense fallback={
                <Backdrop>
                    <CircularProgress color="primary" />
                </Backdrop>
            }>
                <ErrorBoundary>
                    <CompanyRegistration />
                </ErrorBoundary>
            </Suspense>
        </Layout>
    )
}