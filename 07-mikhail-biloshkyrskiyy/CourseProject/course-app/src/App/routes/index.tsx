import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

import Layout from '@/containers/Layout'

const Content = lazy(() => import('@/components/Content/Layout'))
const About = lazy(() => import('@/components/Content/About'))
const Calculator = lazy(() => import('@/components/Content/Calculator'))
const Tariffs = lazy(() => import('@/components/Content/Tariffs'))

const ErrorBoundary = lazy(() => import('@/components/Utils/ErrorBoundary'))

import {
    RouterTracking,
    RouterTrackingHistory
} from '@/routes/tracking'
import {
    RouterOffice,
    RouterOfficeTypes,
    RouterOfficeLocation,
    RouterOfficeLocalities
} from '@/routes/office'
import {
    RouterRegistration,
    RouterUserRegistration,
    RouterCompanyRegistration
} from '@/routes/auth'
import {
    NotFound
} from '@/routes/notFound'

export default (
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
        <Route path='/registration' exact>
            <RouterRegistration />
        </Route>
        <Route path='/registration/user'>
            <RouterUserRegistration />
        </Route>
        <Route path='/registration/company'>
            <RouterCompanyRegistration />
        </Route>
        <Route path='/office' exact>
            <RouterOffice />
        </Route>
        <Route path='/office/types'>
            <RouterOfficeTypes />
        </Route>
        <Route path='/office/location'>
            <RouterOfficeLocation />
        </Route>
        <Route path='/office/localities'>
            <RouterOfficeLocalities />
        </Route>
        <Route path='/tracking' exact>
            <RouterTracking />
        </Route>
        <Route path='/tracking/history'>
            <RouterTrackingHistory />
        </Route>
        <Route>
            <NotFound />
        </Route>
    </Switch>
)