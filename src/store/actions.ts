import { Movie, MovieStoringTypes, STORE_MOVIE_SUCCESS } from './types';

export function storeMovie(addedMovie: Movie): MovieStoringTypes {
	return {
		type: STORE_MOVIE_SUCCESS,
		payload: addedMovie,
	};
}
