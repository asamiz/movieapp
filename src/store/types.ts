import { IShortMovie } from '../common';

export interface MoviesState {
	movies: IShortMovie[];
}

export const STORE_MOVIE_SUCCESS = 'STORE_MOVIE_SUCCESS';

interface MovieStoringAction {
	type: typeof STORE_MOVIE_SUCCESS;
	payload: IShortMovie;
}

export type MovieStoringTypes = MovieStoringAction;
