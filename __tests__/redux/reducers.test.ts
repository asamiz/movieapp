import { storingMovieReducer } from '../../src/store/reducers';
import * as types from '../../src/store/types';

describe('todos reducer', () => {
	it('should return the initial state', () => {
		expect(storingMovieReducer(undefined, {})).toEqual({
			movies: [],
		});
	});

	it('should handle STORE_MOVIE_SUCCESS', () => {
		const movie = {
			Title: 'Test Movie3',
			Poster: 'https://i.postimg.cc/ZRc3TH1T/New-Project-2.png',
			Type: 'movie',
			imdbID: 'tt73747jj',
			Year: '2020',
			onPress: () => console.log('HI CARA CARE'),
		};
		const state = storingMovieReducer([], {
			type: types.STORE_MOVIE_SUCCESS,
			payload: movie,
		});
		expect({ movies: [...state.movies] }).toEqual({
			movies: [movie],
		});
	});

	it('should add movie to the existing array of the movie', () => {
		const mockMovie1 = {
			Title: 'mockMovie1',
			Poster: 'https://i.postimg.cc/ZRc3TH1T/New-Project-2.png',
			Type: 'movie',
			imdbID: 'tt73747jj',
			Year: '2020',
			onPress: () => console.log('HI CARA CARE'),
		};
		const mockMovie2 = {
			Title: 'mockMovie2',
			Poster: 'https://i.postimg.cc/ZRc3TH1T/New-Project-2.png',
			Type: 'movie',
			imdbID: 'tt73747jj',
			Year: '2020',
			onPress: () => console.log('HI CARA CARE'),
		};
		const state = storingMovieReducer(
			{ movies: [mockMovie1] },
			{
				type: types.STORE_MOVIE_SUCCESS,
				payload: mockMovie2,
			},
		);
		expect({ movies: [...state.movies] }).toEqual({
			movies: [mockMovie2, mockMovie1],
		});
	});

	it('should return the same movie array if I do not add unique one', () => {
		// to initialize the state with
		const mockMovie1 = {
			Title: 'mockMovie1',
			Poster: 'https://i.postimg.cc/ZRc3TH1T/New-Project-2.png',
			Type: 'movie',
			imdbID: 'tt73747jj',
			Year: '2020',
			onPress: () => console.log('HI CARA CARE'),
		};

		// to initialize the state with
		const mockMovie2 = {
			Title: 'mockMovie2',
			Poster: 'https://i.postimg.cc/ZRc3TH1T/New-Project-2.png',
			Type: 'movie',
			imdbID: 'tt73747jj',
			Year: '2020',
			onPress: () => console.log('HI CARA CARE'),
		};

		// to be added in the state (shouldn't be adde as it has the title of the second one)
		const mockMovie3 = {
			Title: 'mockMovie2',
			Poster: 'https://i.postimg.cc/ZRc3TH1T/New-Project-2.png',
			Type: 'movie',
			imdbID: 'tt73747jj',
			Year: '2020',
			onPress: () => console.log('HI CARA CARE'),
		};

		const state = storingMovieReducer(
			{ movies: [mockMovie1, mockMovie2] },
			{
				type: types.STORE_MOVIE_SUCCESS,
				payload: mockMovie3,
			},
		);
		expect({ movies: [...state.movies] }).toEqual({
			movies: [mockMovie1, mockMovie2],
		});
	});
});
