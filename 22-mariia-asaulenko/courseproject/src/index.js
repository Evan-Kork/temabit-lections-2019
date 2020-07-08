import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';
import "reflect-metadata";
import "es6-shim";

const store = createStore(rootReducer, {isDrawerOpened: false});
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
