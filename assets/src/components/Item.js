import React, { Component } from "react";
import styles from "./Item.scss";

export default class Item extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = { active: false };
	}

	_clickHandler(e) {
		var _active = this.state.active;

		if(_active)
		{
			_active = false;
		}
		else
		{
			_active = true;
		}

		this.setState({ active: _active });
		e.preventDefault();
	}

	render() {
		var is_active = (this.state.active) ? ' is-active' : '';
		return (
			<div className={"item" + is_active}>
				<p>{this.props.test}</p>
				<button onClick={this._clickHandler.bind(this)}>Set Active</button>
			</div>
		)
	}

}

Item.defaultProps = {
	test: 'this is a test'
}