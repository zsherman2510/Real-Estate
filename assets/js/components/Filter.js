import React, { Component } from 'react';

export default class Filter extends Component {
	constructor() {
		super();
		this.state = {};
		this.buyingOptions = this.buyingOptions.bind(this);
		this.cities = this.cities.bind(this);
		this.houseTypes = this.houseTypes.bind(this);
		this.bedrooms = this.bedrooms.bind(this);
		this.bathrooms = this.bathrooms.bind(this);
	}
	componentWillMount() {
		this.props.populateAction();
	}
	buyingOptions() {
		if (this.props.globalState.populateFormsData.buyingOptions != undefined) {
			let { buyingOptions } = this.props.globalState.populateFormsData;
			console.log(buyingOptions);
			return buyingOptions.map(listing => {
				return (
					<option key={listing} value={listing}>
						{listing}
					</option>
				);
			});
		}
	}
	cities() {
		if (this.props.globalState.populateFormsData.cities != undefined) {
			let { cities } = this.props.globalState.populateFormsData;
			console.log(cities);
			return cities.map(listing => {
				return (
					<option key={listing} value={listing}>
						{listing}
					</option>
				);
			});
		}
	}

	houseTypes() {
		if (this.props.globalState.populateFormsData.houseTypes != undefined) {
			let { houseTypes } = this.props.globalState.populateFormsData;
			console.log(houseTypes);
			return houseTypes.map(listing => {
				return (
					<option key={listing} value={listing}>
						{listing}
					</option>
				);
			});
		}
	}
	bedrooms() {
		if (this.props.globalState.populateFormsData.bedrooms != undefined) {
			let { bedrooms } = this.props.globalState.populateFormsData;
			console.log(bedrooms);
			return bedrooms.map(listing => {
				return (
					<option key={listing} value={listing}>
						{listing} + BR
					</option>
				);
			});
		}
	}
	bathrooms() {
		if (this.props.globalState.populateFormsData.bathrooms != undefined) {
			let { bathrooms } = this.props.globalState.populateFormsData;
			console.log(bathrooms);
			return bathrooms.map(listing => {
				return (
					<option key={listing} value={listing}>
						{listing} + BA
					</option>
				);
			});
		}
	}

	render() {
		return (
			<section id="filter">
				<div className="inside">
					<h4>Filter</h4>

					<label htmlFor="city">City</label>
					<select
						name="city"
						className="filters city"
						onChange={this.props.change}
					>
						<option value="All">All Cities</option>
						{this.cities()}
					</select>
					<label htmlFor="houseType">House Type</label>
					<select
						name="houseType"
						className="filters houseType"
						onChange={this.props.change}
					>
						<option value="All">All Homes</option>
						{this.houseTypes()}
					</select>
					<label htmlFor="bedrooms">Bedrooms</label>
					<select
						name="bedrooms"
						className="filters bedrooms"
						onChange={this.props.change}
					>
						{this.bedrooms()}
					</select>
					<label htmlFor="bathrooms">Bath</label>
					<select
						name="bathrooms"
						className="filters bathrooms"
						onChange={this.props.change}
					>
						{this.bathrooms()}
					</select>
					<div className="filters price">
						<span className="title">Price</span>
						<input
							type="number"
							name="min_price"
							className="min_price"
							placeholder="min"
							value={this.props.globalState.min_price}
							onChange={this.props.change}
						/>
						<input
							type="number"
							name="max_price"
							className="max_price"
							placeholder="max"
							value={this.props.globalState.max_price}
							onChange={this.props.change}
						/>
					</div>
					<div className="filters floor_space">
						<span className="title">Floor Space</span>
						<input
							type="number"
							name="min_floor_space"
							className="min_floor_space"
							placeholder="min"
							value={this.props.globalState.min_floor_space}
							onChange={this.props.change}
						/>
						<input
							type="number"
							name="max_floor_space"
							className="max_floor_space"
							placeholder="max"
							value={this.props.globalState.max_floor_space}
							onChange={this.props.change}
						/>
					</div>
					<div className="filters extras">
						<span className="title">Extras</span>
						<label htmlFor="extras">
							<span>Elevators</span>
							<input
								name="elevator"
								value="elevator"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
						<label htmlFor="extras">
							<span>Swimming Pool</span>
							<input
								name="swimming_pool"
								value="swimming_pool"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
						<label htmlFor="extras">
							<span>Finished Basement</span>
							<input
								name="finished_basement"
								value="finished_basement"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
						<label htmlFor="extras">
							<span>Gym</span>
							<input
								name="gym"
								value="gym"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
					</div>
				</div>
			</section>
		);
	}
}
