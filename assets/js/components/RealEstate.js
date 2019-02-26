import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import { library } from '@fortawesome/fontawesome-svg-core';
import listingsData from '../data/listingData';

import {
	faTh,
	faSquare,
	faBed,
	faCouch,
	faThList,
	faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faTh, faSquare, faBed, faCouch, faThList, faMapMarkerAlt);
class App extends Component {
	constructor() {
		super();
		this.state = {
			listingsData
		};
	}

	render() {
		return (
			<div>
				{' '}
				<Header />{' '}
				<section id="content-area">
					<Filter />
					<Listings listingsData={this.state.listingsData} />
				</section>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
