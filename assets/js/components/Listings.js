import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Listings extends Component {
	constructor() {
		super();
		this.state = {};
		this.loopListings = this.loopListings.bind(this);
	}
	loopListings() {
		const { listingsData } = this.props;
		if (listingsData == undefined || listingsData.length == 0) {
			return 'No listings to match your filter';
		}
		return listingsData.map((listing, index) => {
			if (this.props.globalState.view == 'box') {
				// This is the box view
				return (
					<div className="listing" key={index}>
						<div
							className="listing-img"
							style={{
								background: `url(${listing.image}) center`
							}}
						>
							<span className="address">{listing.address}</span>
							<span className="houseType">{listing.houseType}</span>
							<div className="details">
								<div className="user-img" />
								<div className="user-details">
									<span className="user-name">Cheryl Spoon</span>
									<span className="date">02/15/2018</span>
								</div>
								<div className="listing-details">
									<div className="floor-space">
										<FontAwesomeIcon icon="th" />
										<span>{listing.floorSpace} ft&sup2;</span>
									</div>
									<div className="bedrooms">
										<FontAwesomeIcon icon="bed" />{' '}
										<span>{listing.bedrooms} bedrooms</span>
									</div>
									<div className="bathrooms">
										<FontAwesomeIcon icon="toilet" />{' '}
										<span>{listing.bathrooms} bathrooms</span>
									</div>
									<div className="furnished">
										<FontAwesomeIcon icon="couch" />{' '}
										<span>{listing.furniture}</span>
									</div>
									<div className="map">
										<a className="btn" href="">
											View Listing
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="bottom-info">
							<span className="buyingOption">{listing.buyingOption}</span>
							<span className="price">${listing.price} /month</span>
							<span className="location">
								<FontAwesomeIcon icon="map-marker-alt" /> {listing.city},{' '}
								{listing.state}
							</span>
						</div>
					</div>
				);
			} else {
				// This is the long-view
				return (
					<div className="listing" id="long-view" key={index}>
						<div
							className="listing-img"
							style={{
								background: `url(${listing.image}) center`
							}}
						>
							<span className="address">{listing.address}</span>
							<span className="houseType">{listing.houseType}</span>
							<div className="details">
								<div className="user-img" />
								<div className="user-details">
									<span className="user-name">Cheryl Spoon</span>
									<span className="date">02/15/2018</span>
								</div>
								<div className="listing-details">
									<div className="floor-space">
										<FontAwesomeIcon icon="th" />
										<span>{listing.floorSpace} ft&sup2;</span>
									</div>
									<div className="bedrooms">
										<FontAwesomeIcon icon="bed" />{' '}
										<span>{listing.bedrooms} bedrooms</span>
									</div>
									<div className="bathrooms">
										<FontAwesomeIcon icon="toilet" />{' '}
										<span>{listing.bathrooms} bathrooms</span>
									</div>
									<div className="furnished">
										<FontAwesomeIcon icon="couch" />{' '}
										<span>{listing.furniture}</span>
									</div>
									<div className="map">
										<a className="btn" href="">
											View Listing
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="bottom-info">
							<span className="buyingOption">{listing.buyingOption}</span>
							<span className="price">${listing.price} /month</span>
							<span className="location">
								<FontAwesomeIcon icon="map-marker-alt" /> {listing.city},{' '}
								{listing.state}
							</span>
						</div>
					</div>
				);
			}
		});
	}
	render() {
		return (
			<section id="listings">
				Listings
				<section className="search-area">
					<input type="text" name="search" onChange={this.props.change} />
				</section>
				<section className="sort-by-area">
					<div className="results">
						{this.props.globalState.filteredData.length} results found
					</div>
					<div className="sort-options">
						<select
							name="sortby"
							className="sortby"
							onChange={this.props.change}
						>
							<option value="price-dsc">Lowest Price</option>
							<option value="price-asc">Highest Price</option>
						</select>
						<div className="view">
							<FontAwesomeIcon
								icon="th-list"
								className="fa"
								onClick={this.props.changeView.bind(null, 'long')}
							/>
							<FontAwesomeIcon
								icon="th"
								className="fa"
								onClick={this.props.changeView.bind(null, 'box')}
							/>
						</div>
					</div>
				</section>
				<section className="listings-results">{this.loopListings()}</section>
				<section className="pagination">
					<ul className="pages">
						<li>Prev</li>
						<li className="active">1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>Next</li>
					</ul>
				</section>
			</section>
		);
	}
}
