import client from './client';
import { ISearchedMovieResponse } from '../common';

export const getMoviesLits = async (query: string) => {
	let requestData: ISearchedMovieResponse = {
		movies: [],
		error: false,
	};
	const params = { s: query };
	const { data } = await (await client()).get('/', { params });
	try {
		if (data.Response === 'True') {
			requestData = {
				movies: data.Search,
				error: false,
			};
			return requestData;
		}
		return { ...requestData, error: true };
	} catch (error) {
		return error.body;
	}
};
