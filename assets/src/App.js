import React, { Component } from 'react'
import styles from './App.scss' // create initial app styles

import GlobalNav from './components/GlobalNav'
import Item from './components/Item'

class App extends Component {
	render() {
		return (
			<div>
				<GlobalNav />
				<Item />
			</div>
			);
	}
}

export default App