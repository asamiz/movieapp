import { ISearchedMovie } from '../common';

export interface MoviesState {
	movies: ISearchedMovie[];
}

export const STORE_MOVIE_SUCCESS = 'STORE_MOVIE_SUCCESS';

interface MovieStoringAction {
	type: typeof STORE_MOVIE_SUCCESS;
	payload: ISearchedMovie;
}

export type MovieStoringTypes = MovieStoringAction;
