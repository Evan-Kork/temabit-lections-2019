import React                          from 'react';
import './app.scss';
import Header                         from "../header/Header";
import Main                           from "../main/Main";
import Footer                         from "../footer/Footer";
import {BrowserRouter} from 'react-router-dom'


const App = () => {
	
	const data = [
		{
			header: {}
		},
		{
			main: {}
		},
		{
			footer: {}
		}
	];
	
	return (
		<BrowserRouter>
			<div className="container">
				<Header header={data.h} />
				<Main />
				<Footer />
			</div>
		</BrowserRouter>
	)
};

export default App;