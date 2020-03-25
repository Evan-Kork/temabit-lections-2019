import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { render } from 'react-dom'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider, ReactReduxContext } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'

import createRootReducer from '@/reducers'
import routes from '@/routes'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
)
const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    headers: {
        authorization: 'Bearer test jwt'
    }
})

render(
    <ApolloProvider client={client}>
        <Provider store={store} context={ReactReduxContext}>
            <ConnectedRouter history={history}>
                {routes}
            </ConnectedRouter>
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
)