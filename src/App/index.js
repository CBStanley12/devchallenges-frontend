import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

import Sidebar from '../components/Sidebar';

const App = () => {
	return (
		<BrowserRouter>
			<div className="layout-container">
				<Sidebar />
				<main className="layout-main main">
					<Routes>
						<Route path="/" />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
};

App.propTypes = {

};

export default App;
