import React, {FC} from 'react';
import './app.scss';
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import {BrowserRouter} from 'react-router-dom'

const App: FC = () => {

	return (
		<BrowserRouter>
			<div className="container-fluid">
				<div className="row justify-content-between">
					<Header/>
					<Main/>
					<Footer/>
				</div>
			</div>
		</BrowserRouter>
	)
};

export default App;