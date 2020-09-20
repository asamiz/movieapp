import { IMovie } from '../common';

export interface MoviesState {
	movies: IMovie[];
}

export const STORE_MOVIE_SUCCESS = 'STORE_MOVIE_SUCCESS';

interface MovieStoringAction {
	type: typeof STORE_MOVIE_SUCCESS;
	payload: IMovie;
}

export type MovieStoringTypes = MovieStoringAction;
