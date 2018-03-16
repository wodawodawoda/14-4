import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

export class MovieImg extends React.Component {
	render() {
		return this.props.img ? <img src={this.props.img}/> : ''
	}
}
MovieImg.propTypes = {movie: PropTypes.string}