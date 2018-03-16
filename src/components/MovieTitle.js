import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

export class MovieTitle extends React.Component {
	render() {
		return <h2>{this.props.title}</h2>
	}
}
MovieTitle.propTypes = {movie: PropTypes.string}
