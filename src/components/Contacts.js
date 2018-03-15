import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import {Contact} from './Contact';

export class Contacts extends React.Component {
	render() {
		console.log(this.props.items)
		const contacts = this.props.items.map(function(contact) {
			return <Contact item={contact} key={contact.id}/>
		});
		return <ul className="contacts container">{contacts}</ul>
	}
}