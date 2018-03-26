import React from "react";
import ReactDOM from "react-dom";

import {ContactForm} from './ContactForm';
import {Contacts} from './Contacts';
import {data, dataTemplate} from './data.js';

import '../sass/index.sass';

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

ReactDOM.render(<App/>, document.getElementById('app'))