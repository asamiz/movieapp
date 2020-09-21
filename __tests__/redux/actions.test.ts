import * as actions from '../../src/store/actions';
import * as types from '../../src//store/types';

describe('actions', () => {
	it('should create an action to store the movie', () => {
		const movie = {
			Title: 'Test Movie',
			Poster: 'https://i.postimg.cc/ZRc3TH1T/New-Project-2.png',
			Type: 'movie',
			imdbID: 'tt73747jj',
			Year: '2020',
			onPress: () => console.log('HI CARA CARE'),
		};
		const expectedAction = {
			type: types.STORE_MOVIE_SUCCESS,
			payload: movie,
		};
		expect(actions.storeMovie(movie)).toEqual(expectedAction);
	});
});
