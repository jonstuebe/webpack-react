import React, { Component } from "react"
import { Link } from 'react-router'

import styles from "./GlobalNav.scss";

class GlobalNav extends Component {

	render() {
		return (
			<div className='global-nav'>
				<ul>
					<li className='global-nav__item'><Link to="/">Home</Link></li>
					<li className='global-nav__item'><Link to="/about">About</Link></li>
				</ul>
			</div>
		)
	}

}

export default GlobalNav