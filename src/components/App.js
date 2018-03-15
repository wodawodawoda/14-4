import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import {ContactForm} from './ContactForm';
import {Contacts} from './Contacts';
import {data} from './data.js';
import {dataTemplate} from './data.js';

export class App extends React.Component {
	render() {
		return (
			<div className="app container">
				<ContactForm contact={dataTemplate}/>
				<Contacts items={data}/>
			</div>
		);
	}
};

ReactDOM.render(<App/>, document.body)