import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Listings extends Component {
	render() {
		return (
			<section id="listings">
				Listings
				<section className="search-area">
					<input type="text" name="search" />
				</section>
				<section className="sort-by-area">
					<div className="results">390 results found</div>
					<div className="sort-options">
						<select name="sort-by" className="sort-by" id="">
							<option value="price-asc">Highest Price</option>
							<option value="price-asc">Lowest Price</option>
						</select>
						<div className="view">
							<FontAwesomeIcon icon="th-list" className="fa" />
							<FontAwesomeIcon icon="th" className="fa" />
						</div>
					</div>
				</section>
				<section className="listings-results">
					<div className="listing">
						<div className="listing-img">
							<span className="address">123 Main St. Tucson, AZ 85720</span>
							<div className="details">
								<div className="user-img" />
								<div className="user-details">
									<span className="user-name">Cheryl Spoon</span>
									<span className="date">02/15/2018</span>
								</div>
								<div className="listing-details">
									<div className="floor-space">
										<FontAwesomeIcon icon="th" />
										<span>1500 ft&sup2;</span>
									</div>
									<div className="bedrooms">
										<FontAwesomeIcon icon="bed" /> <span>4 bedrooms</span>
									</div>
									<div className="furnished">
										<FontAwesomeIcon icon="couch" /> <span>unfurnished</span>
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
							<span className="price">$2000 / month</span>
							<span className="location">
								<FontAwesomeIcon icon="map-marker-alt" /> Oro Valley, AZ
							</span>
						</div>
					</div>
					<div className="listing">
						<div className="listing-img">
							<span className="address">123 Main St. Tucson, AZ 85720</span>
							<div className="details">
								<div className="user-img" />
								<div className="user-details">
									<span className="user-name">Cheryl Spoon</span>
									<span className="date">02/15/2018</span>
								</div>
								<div className="listing-details">
									<div className="floor-space">
										<FontAwesomeIcon icon="th" />
										<span>1500 ft&sup2;</span>
									</div>
									<div className="bedrooms">
										<FontAwesomeIcon icon="bed" /> <span>4 bedrooms</span>
									</div>
									<div className="furnished">
										<FontAwesomeIcon icon="couch" /> <span>unfurnished</span>
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
							<span className="price">$2000 / month</span>
							<span className="location">
								<FontAwesomeIcon icon="map-marker-alt" /> Oro Valley, AZ
							</span>
						</div>
					</div>
					<div className="listing">
						<div className="listing-img">
							<span className="address">123 Main St. Tucson, AZ 85720</span>
							<div className="details">
								<div className="user-img" />
								<div className="user-details">
									<span className="user-name">Cheryl Spoon</span>
									<span className="date">02/15/2018</span>
								</div>
								<div className="listing-details">
									<div className="floor-space">
										<FontAwesomeIcon icon="th" />
										<span>1500 ft&sup2;</span>
									</div>
									<div className="bedrooms">
										<FontAwesomeIcon icon="bed" /> <span>4 bedrooms</span>
									</div>
									<div className="furnished">
										<FontAwesomeIcon icon="couch" /> <span>unfurnished</span>
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
							<span className="price">$2000 / month</span>
							<span className="location">
								<FontAwesomeIcon icon="map-marker-alt" /> Oro Valley, AZ
							</span>
						</div>
					</div>
					<div className="listing">
						<div className="listing-img">
							<span className="address">123 Main St. Tucson, AZ 85720</span>
							<div className="details">
								<div className="user-img" />
								<div className="user-details">
									<span className="user-name">Cheryl Spoon</span>
									<span className="date">02/15/2018</span>
								</div>
								<div className="listing-details">
									<div className="floor-space">
										<FontAwesomeIcon icon="th" />
										<span>1500 ft&sup2;</span>
									</div>
									<div className="bedrooms">
										<FontAwesomeIcon icon="bed" /> <span>4 bedrooms</span>
									</div>
									<div className="furnished">
										<FontAwesomeIcon icon="couch" /> <span>unfurnished</span>
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
							<span className="price">$2000 / month</span>
							<span className="location">
								<FontAwesomeIcon icon="map-marker-alt" /> Oro Valley, AZ
							</span>
						</div>
					</div>
					<div className="listing">
						<div className="listing-img">
							<span className="address">123 Main St. Tucson, AZ 85720</span>
							<div className="details">
								<div className="user-img" />
								<div className="user-details">
									<span className="user-name">Cheryl Spoon</span>
									<span className="date">02/15/2018</span>
								</div>
								<div className="listing-details">
									<div className="floor-space">
										<FontAwesomeIcon icon="th" />
										<span>1500 ft&sup2;</span>
									</div>
									<div className="bedrooms">
										<FontAwesomeIcon icon="bed" /> <span>4 bedrooms</span>
									</div>
									<div className="furnished">
										<FontAwesomeIcon icon="couch" /> <span>unfurnished</span>
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
							<span className="price">$2000 / month</span>
							<span className="location">
								<FontAwesomeIcon icon="map-marker-alt" /> Oro Valley, AZ
							</span>
						</div>
					</div>
				</section>
				<section className="pagination">
					<ul className="pagination-nums">
						<li>Prev</li>
						<li>1</li>
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
