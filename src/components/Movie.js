import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import {movies} from "./data";
import {MovieTitle} from "./MovieTitle";
import {MovieDesc} from "./MovieDesc";
import {MovieImg} from "./MovieImg";

export class Movie extends React.Component {
	render() {
		const movie = this.props.movie.map(function(data, index) {
			return (
				<li key={data.id}>
					<MovieTitle title={data.title}/>
					<MovieDesc desc={data.desc}/>
					<MovieImg img={data.img}/>
				</li>
			)
		})
		return movie
	}
}
Movie.propTypes = {movie: PropTypes.array}
Movie.defaultProps = { movie: movies };