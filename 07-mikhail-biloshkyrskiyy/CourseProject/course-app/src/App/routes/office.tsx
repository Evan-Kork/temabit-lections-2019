import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from '@/containers/Layout'
import Office from '@/components/Content/Office'
import TypesOffice from '@/components/Content/TypesOffice'
import Location from '@/components/Content/Map'
import Localities from '@/components/Content/Localities'


const RouterOffice = (
    <Switch>
        <Route path='/office' exact>
            <Layout>
                <Office />
            </Layout>
        </Route>
        <Route path='/office/types'>
            <Layout>
                <TypesOffice />
            </Layout>
        </Route>
        <Route path='/office/location'>
            <Layout>
                <Location />
            </Layout>
        </Route>
        <Route path='/office/localities'>
            <Layout>
                <Localities />
            </Layout>
        </Route>
    </Switch>
)

export default RouterOffice