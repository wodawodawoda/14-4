import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

export class MovieDesc extends React.Component {
	render() {
		return <p>{this.props.desc}</p>
	}
}
MovieDesc.propTypes = {movie: PropTypes.string}