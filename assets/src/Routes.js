import React, { Component } from "react";
import { createHistory, useBasename } from 'history'
import { Router, Route, Link } from "react-router";

import App from './App';
import About from './components/About';

const history = useBasename(createHistory)({
  basename: ''
})

export default class RouterContainer extends Component  {

	render() {
		return (
			<Router history={history}>
				<Router path="/" component={App}>
					<Route path="about" component={About} />
				</Router>
			</Router>
		)
	}

}