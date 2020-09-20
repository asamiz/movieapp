import { IMovie } from '../common';
import { MovieStoringTypes, STORE_MOVIE_SUCCESS } from './types';

export function storeMovie(addedMovie: IMovie): MovieStoringTypes {
	return {
		type: STORE_MOVIE_SUCCESS,
		payload: addedMovie,
	};
}
