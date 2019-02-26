import React, { Component } from 'react';

export default class Filter extends Component {
	render() {
		return (
			<section id="filter">
				<div className="inside">
					<h4>Filter</h4>
					<select name="buying-option" className="filters buying-option">
						<option value="">For Rent</option>
						<option value="">For Sale</option>
					</select>
					<select name="neighborhood" className="filters neighborhood">
						<option value="">Choose Neighborhood</option>
						<option value="">Oro Valley</option>
						<option value="">Vail</option>
						<option value="">South Tucson</option>
						<option value="">Casa Grande</option>
					</select>
					<select name="housetype" className="filters housetype">
						<option value="">Choose House type</option>
						<option value="">Ranch</option>
						<option value="">Condo</option>
						<option value="">Townhouse</option>
					</select>
					<select name="bedrooms" className="filters bedrooms">
						<option value="">Choose bedrooms</option>
						<option value="">2+ BR</option>
						<option value="">3+ BR</option>
						<option value="">4+ BR</option>
					</select>
					<select name="bathrooms" className="filters bathrooms">
						<option value="">Choose bathrooms</option>
						<option value="">2+ BA</option>
						<option value="">3+ BA</option>
						<option value="">4+ BA</option>
					</select>
					<div className="filters price">
						<span className="title">Price</span>
						<input
							type="text"
							name="min-price"
							className="min-price"
							placeholder="min"
						/>
						<input
							type="text"
							name="max-price"
							className="max-price"
							placeholder="max"
						/>
					</div>
					<div className="filters floor-space">
						<span className="title">Floor Space</span>
						<input
							type="text"
							name="min-floor-space"
							className="min-floor-space"
							placeholder="min"
						/>
						<input
							type="text"
							name="max-floor-space"
							className="max-floor-space"
							placeholder="max"
						/>
					</div>
					<div className="filters radius">
						<span className="title">Radius</span>
						<input
							type="text"
							name="min-radius"
							className="min-radius"
							placeholder="min"
						/>
						<input
							type="text"
							name="max-radius"
							className="max-radius"
							placeholder="max"
						/>
					</div>
					<div className="filters extras">
						<span className="title">Extras</span>
						<label htmlFor="extras">
							<span>Elevators</span>
							<input name="extras" value="elevator" type="checkbox" />
						</label>
						<label htmlFor="extras">
							<span>Swimming Pool</span>
							<input name="extras" value="swimming-pool" type="checkbox" />
						</label>
						<label htmlFor="extras">
							<span>Finished Basement</span>
							<input name="extras" value="finished-basement" type="checkbox" />
						</label>
						<label htmlFor="extras">
							<span>Gym</span>
							<input name="extras" value="gym" type="checkbox" />
						</label>
					</div>
				</div>
			</section>
		);
	}
}
