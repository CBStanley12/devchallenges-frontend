import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

import Sidebar from '../components/Sidebar';
import HomePage from '../pages/Home';
import ButtonComponentPage from '../pages/ButtonComponent';

const App = () => {
	return (
		<div className="layout-container">
			<Sidebar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="button-component" element={<ButtonComponentPage />} />
			</Routes>
		</div>
	);
};

export default App;