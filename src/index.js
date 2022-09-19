import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/src/collapse'; // required for navbar collapse
import 'bootswatch/dist/flatly/bootstrap.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="/" element={<App />} />
		</Routes>
		<Footer />
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
