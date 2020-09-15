import React from 'react';
import './assets/styles/App.scss';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact>
					<Homepage />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/blog">
					<Blog />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/portfolio">
					<Portfolio />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
