import React, { Component } from 'react';

export default class Filter extends Component {
	render() {
		return (
			<section id="filter">
				<div className="inside">
					<h4>Filter</h4>
					<label htmlFor="buying_option">Rent/Buy</label>
					<select
						name="buying_option"
						className="filters buying_option"
						onChange={this.props.change}
					>
						<option value="All">All Options</option>
						<option value="For Rent">For Rent</option>
						<option value="For Sale">For Sale</option>
					</select>
					<label htmlFor="city">City</label>
					<select
						name="city"
						className="filters city"
						onChange={this.props.change}
					>
						<option value="All">All Cities</option>
						<option value="Oro Valley">Oro Valley</option>
						<option value="Vail">Vail</option>
						<option value="South Tucson">South Tucson</option>
						<option value="Casa Grande">Casa Grande</option>
					</select>
					<label htmlFor="houseType">House Type</label>
					<select
						name="houseType"
						className="filters houseType"
						onChange={this.props.change}
					>
						<option value="All">All Homes</option>
						<option value="Ranch">Ranch</option>
						<option value="Condo">Condo</option>
						<option value="Townhouse">Townhouse</option>
					</select>
					<label htmlFor="bedrooms">Bedrooms</label>
					<select
						name="bedrooms"
						className="filters bedrooms"
						onChange={this.props.change}
					>
						<option value="0">0+ BR</option>
						<option value="2">2+ BR</option>
						<option value="3">3+ BR</option>
						<option value="4">4+ BR</option>
					</select>
					<label htmlFor="bathrooms">Bath</label>
					<select
						name="bathrooms"
						className="filters bathrooms"
						onChange={this.props.change}
					>
						<option value="0">0+ BA</option>
						<option value="2">2+ BA</option>
						<option value="3">3+ BA</option>
						<option value="4">4+ BA</option>
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
