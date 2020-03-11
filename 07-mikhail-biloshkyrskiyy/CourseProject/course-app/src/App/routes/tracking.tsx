import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from '@/containers/Layout'
import Tracking from '@/components/Content/Tracking'
import TrackingHistory from '@/components/Content/TrackingHistory'

const RouterDeclaration = (
    <Switch>
        <Route path='/tracking' exact>
            <Layout>
                <Tracking />
            </Layout>
        </Route>
        <Route path='/tracking/history'>
            <Layout>
                <TrackingHistory />
            </Layout>
        </Route>
    </Switch>
)

export default RouterDeclaration