import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o lwie'
	},
	{
		id: 3,
		title:'Zielona mila',
		desc: 'Lorem ipsum dolor sit amet.',
		img: 'http://1.fwcdn.pl/po/08/62/862/7517878.6.jpg'
	},
	{
		id: 4,
		title:'Nietyklani',
		desc: 'Lorem ipsum dolor sit amet.',
		img: 'http://1.fwcdn.pl/po/33/90/583390/7441162.6.jpg'
	},
	{
		id: 5,
		title:'Ojciec chrzestny',
		desc: 'Lorem ipsum dolor sit amet.',
		img: 'http://1.fwcdn.pl/po/10/89/1089/7196615.6.jpg'
	}
];

class MovieTitle extends React.Component {
	render() {
		return <h2>{this.props.title}</h2>
	}
}
MovieTitle.propTypes = {movie: PropTypes.string}

class MovieDesc extends React.Component {
	render() {
		return <p>{this.props.desc}</p>
	}
}
MovieDesc.propTypes = {movie: PropTypes.string}

class MovieImg extends React.Component {
	render() {
		return this.props.img ? <img src={this.props.img}/> : ''
	}
}
MovieImg.propTypes = {movie: PropTypes.string}

class Movie extends React.Component {
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



class MoviesList extends React.Component {
	render() {
		return (
			<div>
				<h1></h1>
				<ul>
					<Movie/>
				</ul>
			</div>
		)
	}
}

ReactDOM.render(<MoviesList/>, document.getElementById('app'));