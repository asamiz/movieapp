import client from './client';
import { DUMMY_IMAGE, IRequestData } from '../common';
import { navigate } from '../navigation';

export const getMovies = async (query: string) => {
	let requestData: IRequestData = {
		data: [],
		error: false,
	};
	const params = { t: query };
	const { data } = await (await client()).get('/', { params });
	try {
		if (data.Response === 'True') {
			requestData = {
				error: false,
				data: [
					{
						Title: data.Title,
						Released: data.Released,
						Poster: data.Poster === 'N/A' ? DUMMY_IMAGE : data.Poster,
						Country: data.Country,
						imdbRating: data.imdbRating,
						Rated: data.Rated,
						Runtime: data.Runtime,
						Ratings: data.Ratings,
						Director: data.Director,
						Actors: data.Actors,
						Genre: data.Genre,
						Plot: data.Plot,
						onPress: () => navigate('MovieScreen', { data }),
					},
				],
			};
			return requestData;
		}
		return { ...requestData, error: true, loading: false };
	} catch (error) {
		return error.body;
	}
};
