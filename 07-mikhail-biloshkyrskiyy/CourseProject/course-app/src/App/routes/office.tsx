import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

import Layout from '@/containers/Layout'

const Office = lazy(() => import('@/components/Content/Office'))
const TypesOffice = lazy(() => import('@/components/Content/TypesOffice'))
const Location = lazy(() => import('@/components/Content/Map'))
const Localities = lazy(() => import('@/components/Content/Localities'))

const ErrorBoundary = lazy(() => import('@/components/Utils/ErrorBoundary'))

const RouterOffice = (
    <Switch>
        <Route path='/office' exact>
            <Layout>
                <Suspense fallback={<CircularProgress color="secondary" />}>
                    <ErrorBoundary>
                        <Office />
                    </ErrorBoundary>
                </Suspense>
            </Layout>
        </Route>
        <Route path='/office/types'>
            <Layout>
                <Suspense fallback={<CircularProgress color="secondary" />}>
                    <ErrorBoundary>
                        <TypesOffice />
                    </ErrorBoundary>
                </Suspense>
            </Layout>
        </Route>
        <Route path='/office/location'>
            <Layout>
                <Suspense fallback={<CircularProgress color="secondary" />}>
                    <ErrorBoundary>
                        <Location />
                    </ErrorBoundary>
                </Suspense>
            </Layout>
        </Route>
        <Route path='/office/localities'>
            <Layout>
                <Suspense fallback={<CircularProgress color="secondary" />}>
                    <ErrorBoundary>
                        <Localities />
                    </ErrorBoundary>
                </Suspense>
            </Layout>
        </Route>
    </Switch>
)

export default RouterOffice