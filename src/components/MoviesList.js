import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import {Movie} from "./Movie";


class MoviesList extends React.Component {
	render() {
		return (
			<div>
				<h1>Lista filmów:</h1>
				<ul>
					<Movie/>
				</ul>
			</div>
		)
	}
}

ReactDOM.render(<MoviesList/>, document.getElementById('app'));