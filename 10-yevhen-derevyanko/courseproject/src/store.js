import { createStore, applyMiddleware } from 'redux';
import rootReduser from './reducers';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore(
    rootReduser, 
   composeWithDevTools(applyMiddleware(thunk))
);


export default store;