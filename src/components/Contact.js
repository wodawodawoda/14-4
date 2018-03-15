import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

export class Contact extends React.Component {
	render() {
		return (
			<div className="contact container">
				<img src={this.props.item.img} alt="Zdjęcie {this.props.item.lastName}" className="contact__img"/>
				<p className="contact__label">Imię: {this.props.item.firstName}</p>
				<p className="contact__label">Nazwisko: {this.props.item.lastName}</p>
				<a href="" className="contact__email">{this.props.item.email}</a>
			</div>
		)
	}
}
