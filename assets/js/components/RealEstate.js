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
	faToilet,
	faCouch,
	faThList,
	faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faTh, faSquare, faBed, faToilet, faCouch, faThList, faMapMarkerAlt);
class App extends Component {
	constructor() {
		super();
		this.state = {
			listingsData,
			buyingOption: 'All',
			city: 'All',
			houseType: 'All',
			bedrooms: 0,
			bathrooms: 0,
			min_price: 0,
			max_price: 10000,
			min_floor_space: 0,
			max_floor_space: 10000,
			elevator: false,
			swimming_pool: false,
			finished_basement: false,
			gym: false,
			filteredData: listingsData,
			populateFormsData: '',
			sortby: 'price-dsc',
			view: 'box',
			search: ''
		};
		this.change = this.change.bind(this);
		this.filteredData = this.filteredData.bind(this);
		this.populateForms = this.populateForms.bind(this);
		this.changeView = this.changeView.bind(this);
	}
	componentWillMount() {
		let listingsData = this.state.listingsData.sort((a, b) => {
			return a.price - b.price;
		});

		this.setState({
			listingsData
		});
	}
	change(event) {
		const name = event.target.name;
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;
		this.setState(
			{
				[name]: value
			},
			() => {
				console.log(this.state);
				this.filteredData();
			}
		);
	}

	changeView(viewName) {
		this.setState({
			view: viewName
		});
	}

	filteredData() {
		let newListing = this.state.listingsData.filter(listing => {
			return (
				listing.price >= this.state.min_price &&
				listing.price <= this.state.max_price &&
				listing.floorSpace >= this.state.min_floor_space &&
				listing.floorSpace <= this.state.max_floor_space &&
				listing.bedrooms >= this.state.bedrooms &&
				listing.bathrooms >= this.state.bathrooms
			);
		});
		if (this.state.buyingOption != 'All') {
			newListing = newListing.filter(listing => {
				return listing.buyingOption == this.state.buyingOption;
			});
		}
		if (this.state.city != 'All') {
			newListing = newListing.filter(listing => {
				return listing.city == this.state.city;
			});
		}
		if (this.state.houseType != 'All') {
			newListing = newListing.filter(listing => {
				return listing.houseType == this.state.houseType;
			});
		}
		if (this.state.sortby == 'price-dsc') {
			newListing = newListing.sort((a, b) => {
				return a.price - b.price;
			});
		}
		if (this.state.sortby == 'price-asc') {
			newListing = newListing.sort((a, b) => {
				return b.price - a.price;
			});
		}
		if (this.state.search != '') {
			newListing = newListing.filter(listing => {
				let city = listing.city.toLowerCase();
				let searchText = this.state.search.toLowerCase();
				let n = city.match(searchText);

				if (n != null) {
					return true;
				}
			});
		}
		this.setState({
			filteredData: newListing
		});
	}
	populateForms() {
		//Buying Options
		let buyingOptions = this.state.listingsData.map(listing => {
			return listing.buyingOption;
		});
		buyingOptions = new Set(buyingOptions);
		buyingOptions = [...buyingOptions];

		//City
		let cities = this.state.listingsData.map(listing => {
			return listing.city;
		});
		cities = new Set(cities);
		cities = [...cities];
		cities = cities.sort();

		//HomeType
		let houseTypes = this.state.listingsData.map(listing => {
			return listing.houseType;
		});
		houseTypes = new Set(houseTypes);
		houseTypes = [...houseTypes];
		houseTypes = houseTypes.sort();

		//Bedrooms
		let bedrooms = this.state.listingsData.map(listing => {
			return listing.bedrooms;
		});
		bedrooms = new Set(bedrooms);
		bedrooms = [...bedrooms];
		bedrooms = bedrooms.sort();
		//Bathrooms
		let bathrooms = this.state.listingsData.map(listing => {
			return listing.bathrooms;
		});
		bathrooms = new Set(bathrooms);
		bathrooms = [...bathrooms];
		bathrooms = bathrooms.sort();

		this.setState(
			{
				populateFormsData: {
					buyingOptions,
					cities,
					houseTypes,
					bedrooms,
					bathrooms
				}
			},
			() => {
				console.log(this.state);
			}
		);
	}
	render() {
		return (
			<div>
				{' '}
				<Header />{' '}
				<section id="content-area">
					<Filter
						change={this.change}
						globalState={this.state}
						populateAction={this.populateForms}
					/>
					<Listings
						listingsData={this.state.filteredData}
						change={this.change}
						globalState={this.state}
						changeView={this.changeView}
					/>
				</section>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
