import { MoviesState, MovieStoringTypes, STORE_MOVIE_SUCCESS } from './types';

const initialState: MoviesState = {
	movies: [],
};

export function storingMovieReducer(
	state: MoviesState = initialState,
	action: MovieStoringTypes,
): MoviesState {
	switch (action.type) {
		case STORE_MOVIE_SUCCESS:
			return {
				movies: [...state, action.payload],
			};
		default:
			return state;
	}
}
