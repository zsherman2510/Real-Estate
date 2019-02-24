import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
	faTh,
	faSquare,
	faBed,
	faCouch,
	faThList,
	faMapMarker
} from '@fortawesome/free-solid-svg-icons';

library.add(faTh, faSquare, faBed, faCouch, faThList, faMapMarker);
class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	render() {
		return (
			<div>
				{' '}
				<Header />{' '}
				<section id="content-area">
					<Filter />
					<Listings />
				</section>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
