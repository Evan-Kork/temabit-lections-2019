import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from '@/containers/Layout'

import Content from '@/components/Content/Layout'
import About from '@/components/Content/About'
import Calculator from '@/components/Content/Calculator'

import RouterTracking from '@/routes/tracking'
import RouterOffice from '@/routes/office'

export default (
    <>
        <Switch>
            <Route path='/' exact>
                <Layout>
                    <Content />
                </Layout>
            </Route>
            <Route path='/about'>
                <Layout>
                    <About />
                </Layout>
            </Route>
            <Route path='/calculation'>
                <Layout>
                    <Calculator />
                </Layout>
            </Route>
        </Switch>
        {RouterTracking}
        {RouterOffice}
    </>
)