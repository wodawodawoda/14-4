import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import {Contact} from './Contact';

export class Contacts extends React.Component {
	render() {
		return ( 
			<ul className="contacts container">
				<Contact items={this.props.items} />
			</ul>
		)
	}
}