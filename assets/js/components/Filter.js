import React, { Component } from 'react';

export default class Filter extends Component {
	render() {
		return (<section className="filter">
        <h4>Filter</h4>
        <select name="neighborhood" className="filters neighborhood">
            <option>Oro Valley</option>
        </section>);
        <select name="housetype" className="filters housetype">
            <option>Ranch</option>
        </section>);
        <select name="bedrooms" className="filters bedrooms">
            <option>2 BR</option>
        </section>);
        <div className="filters price">
            <input type="text" name="min-price" className="min-price" />
            <input type="text" name="max-price" className="max-price"/>
        </div>
	}
}
