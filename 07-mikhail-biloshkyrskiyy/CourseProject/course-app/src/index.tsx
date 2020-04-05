import React from 'react'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { ApolloProvider } from '@apollo/react-hooks'
import { render } from 'react-dom'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider, ReactReduxContext } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import Cookie from 'js-cookie'

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

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/graphql',
    credentials: 'same-origin'
})

const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: Cookie.get('jwt')
        }
    }
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
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