export interface IRates {
	Source: string;
	Value: number;
}

export interface IMovieDetailsResponse {
	movie: IMovie;
	error: boolean;
}

export interface ISearchedMovieResponse {
	movies: IShortMovie[];
	error: boolean;
}

export interface IMovie {
	Title?: string;
	Released?: string;
	Poster?: string;
	Ratings?: IRates[];
	Country?: string;
	Runtime?: string;
	Rated?: string;
	Plot?: string;
	Actors?: string;
	Director?: string;
	imdbRating?: string;
	Genre?: string;
}

export interface IShortMovie {
	Title?: string;
	Poster?: string;
	Type?: string;
	imdbID: string;
	Year?: string;
	onPress: () => void;
}
