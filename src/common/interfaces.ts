export interface IRates {
	Source: string;
	Value: number;
}

export interface IRequestData {
	data: IMovie[];
	error: boolean;
}

export interface IMovie {
	Title: string;
	Released: string;
	Poster: string;
	Ratings?: IRates[];
	Country: string;
	Runtime: string;
	Rated: string;
	Plot?: string;
	Actors?: string;
	Director?: string;
	imdbRating?: string;
	Genre?: string;
	onPress?: () => void;
}
