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
			if (state.movies) {
				if (state.movies?.some((item) => item.Title === action.payload.Title)) {
					return state;
				}
				return Object.assign({}, state, {
					movies: [...state!.movies!, action.payload],
				});
			}
			return { movies: [action.payload] };
		default:
			return state;
	}
}
