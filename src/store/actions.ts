import { IShortMovie } from '../common';
import { MovieStoringTypes, STORE_MOVIE_SUCCESS } from './types';

export function storeMovie(addedMovie: IShortMovie): MovieStoringTypes {
	return {
		type: STORE_MOVIE_SUCCESS,
		payload: addedMovie,
	};
}
