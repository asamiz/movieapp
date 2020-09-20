import client from './client';
import { IMovieDetailsResponse } from '../common';

export const getMovieDetails = async (id: string) => {
	let requestData: IMovieDetailsResponse = {
		movie: {},
		error: false,
	};
	const params = { i: id, plot: 'full' };
	const { data } = await (await client()).get('/', { params });
	try {
		if (data.Response === 'True') {
			requestData = {
				error: false,
				movie: {
					Title: data.Title,
					Released: data.Released,
					Poster: data.Poster,
					Country: data.Country,
					imdbRating: data.imdbRating,
					Rated: data.Rated,
					Runtime: data.Runtime,
					Ratings: data.Ratings,
					Director: data.Director,
					Actors: data.Actors,
					Genre: data.Genre,
					Plot: data.Plot,
				},
			};
			return requestData;
		}
		return { ...requestData, error: true };
	} catch (error) {
		return error.body;
	}
};
