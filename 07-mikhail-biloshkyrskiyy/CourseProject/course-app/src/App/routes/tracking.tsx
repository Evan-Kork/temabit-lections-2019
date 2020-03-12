import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

const Layout = lazy(() => import('@/containers/Layout'))
const Tracking = lazy(() => import('@/components/Content/Tracking'))
const TrackingHistory = lazy(() => import('@/components/Content/TrackingHistory'))

const ErrorBoundary = lazy(() => import('@/components/Utils/ErrorBoundary'))

const RouterDeclaration = (
    <Switch>
        <Route path='/tracking' exact>
            <Layout>
                <Suspense fallback={<CircularProgress color="secondary" />}>
                    <ErrorBoundary>
                        <Tracking />
                    </ErrorBoundary>
                </Suspense>
            </Layout>
        </Route>
        <Route path='/tracking/history'>
            <Layout>
                <Suspense fallback={<CircularProgress color="secondary" />}>
                    <ErrorBoundary>
                        <TrackingHistory />
                    </ErrorBoundary>
                </Suspense>
            </Layout>
        </Route>
    </Switch>
)

export default RouterDeclaration