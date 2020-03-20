import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer, {isDrawerOpened: false});
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
