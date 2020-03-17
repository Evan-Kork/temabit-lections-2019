import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

import Layout from '@/containers/Layout'

const Content = lazy(() => import('@/components/Content/Layout'))
const About = lazy(() => import('@/components/Content/About'))
const Calculator = lazy(() => import('@/components/Content/Calculator'))
const Tariffs = lazy(() => import('@/components/Content/Tariffs'))

const ErrorBoundary = lazy(() => import('@/components/Utils/ErrorBoundary'))
const Paper = lazy(() => import('@/components/Utils/Paper'))

import RouterTracking from '@/routes/tracking'
import RouterOffice from '@/routes/office'

export default (
    <>
        {RouterTracking}
        {RouterOffice}
        <Switch>
            <Route path='/' exact>
                <Layout>
                    <Suspense fallback={<CircularProgress color="secondary" />}>
                        <ErrorBoundary>
                            <Content />
                        </ErrorBoundary>
                    </Suspense >
                </Layout>
            </Route>
            <Route path='/about'>
                <Layout>
                    <Suspense fallback={<CircularProgress color="secondary" />}>
                        <ErrorBoundary>
                            <About />
                        </ErrorBoundary>
                    </Suspense >
                </Layout>
            </Route>
            <Route path='/calculation'>
                <Layout>
                    <Suspense fallback={<CircularProgress color="secondary" />}>
                        <ErrorBoundary>
                            <Calculator />
                        </ErrorBoundary>
                    </Suspense >
                </Layout>
            </Route>
            <Route path='/tariffs'>
                <Layout>
                    <Suspense fallback={<CircularProgress color="secondary" />}>
                        <ErrorBoundary>
                            <Tariffs />
                        </ErrorBoundary>
                    </Suspense >
                </Layout>
            </Route>
            <Route>
                <Layout>
                    <Suspense fallback={<CircularProgress color="secondary" />}>
                        <ErrorBoundary>
                            <Paper
                                title="Uhoh!Server error, 404!!!! The page not found!!! you're asking for doesn't exist."
                                supTitle="Page you're asking for doesn't exist."
                            />
                        </ErrorBoundary>
                    </Suspense >
                </Layout>
            </Route>
        </Switch>
    </>
)