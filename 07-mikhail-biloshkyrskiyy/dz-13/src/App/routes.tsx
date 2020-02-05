import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from '~container/layout'
import Question_1 from '~component/question_1'
import Question_2 from '~component/question_2'
import Question_3 from '~component/question_3'

export default (
    <Switch>
        <Route path='/' component={Layout} exact />
        <Route path='/question/1'>
            <Layout>
                <Question_1 />
            </Layout>
        </Route>
        <Route path='/question/2'>
            <Layout>
                <Question_2 />
            </Layout>
        </Route>
        <Route path='/question/3'>
            <Layout>
                <Question_3 />
            </Layout>
        </Route>
    </Switch>
)