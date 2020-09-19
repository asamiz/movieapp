export interface Rates {
	Source: string;
	Value: number;
}

export interface IMovie {
	Title: string;
	Released: string;
	Poster: string;
	Ratings: Rates[];
	Country: string;
	Runtime: string;
	Rated: string;
	Plot?: string;
	Actors?: string;
	Director?: string;
	imdbRating: string;
	Genre?: string;
	onPress: () => void;
}
