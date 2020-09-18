export interface Movie {
	title: string;
	photo: string;
}

export interface MoviesState {
	movies: Movie[];
}

export const STORE_MOVIE_SUCCESS = 'STORE_MOVIE_SUCCESS';

interface MovieStoringAction {
	type: typeof STORE_MOVIE_SUCCESS;
	payload: Movie;
}

export type MovieStoringTypes = MovieStoringAction;
