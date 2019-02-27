import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<header>
				<div className="logo">Rent-A-Place</div>

				<nav>
					<a href="#">Create ads</a>
					<a href="#">Log In</a>
					<a href="#" className="register-btn">
						Register
					</a>
				</nav>
			</header>
		);
	}
}
