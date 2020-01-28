import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from 'containers/layout'

export default (
    <Switch>
        <Route path='/' component={Layout} exact />
        <Route path='/arrayMethod/:id' component={Layout} />
    </Switch>
)