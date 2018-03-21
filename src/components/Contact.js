import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

export class Contact extends React.Component {
	contact(){ 
		return this.props.items.map(function(data, index) {
			return ( 
				<div className="contact container" key={data.id}>
					<img src={data.img} alt="Zdjęcie {data.lastName}" className="contact__img"/>
					<p className="contact__label">Imię: {data.firstName}</p>
					<p className="contact__label">Nazwisko: {data.lastName}</p>
					<a href="" className="contact__email">{data.email}</a>
				</div>
			)
		});
	}
	render() {
		return this.contact()
	}
}
