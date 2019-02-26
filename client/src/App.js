import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			savedList: []
		};
	}

	addToSavedList = (movie) => {
		const savedList = this.state.savedList;
		savedList.push(movie);
		this.setState({ savedList });
	};

	render() {
		return (
			<div>
				<SavedList list={this.state.savedList} />
				<Route exact path="/" component={MovieList} />
				<Route
					path="/movie/:id"
					render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />}
				/>
			</div>
		);
	}
}
