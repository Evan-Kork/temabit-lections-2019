import React, { lazy, Suspense } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import Layout from '@/containers/Layout'
import Backdrop from '@/components/Utils/Backdrop'
import Private from '@/components/Router/Private'

const PrivateOffice = lazy(() => import('@/components/Content/PrivateOffice'))
const ErrorBoundary = lazy(() => import('@/components/Utils/ErrorBoundary'))

export const RouterPrivateOffice: React.FC = () => {
    return (
        <Layout>
            <Private>
                <Suspense fallback={
                    <Backdrop>
                        <CircularProgress color="primary" />
                    </Backdrop>
                }>
                    <ErrorBoundary>
                        <PrivateOffice />
                    </ErrorBoundary>
                </Suspense >
            </Private>
        </Layout>
    )
}