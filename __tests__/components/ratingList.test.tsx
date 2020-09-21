import React from 'react';
import TestRenderer from 'react-test-renderer';
import { RatingList } from '../../src/components';
import { render } from 'react-native-testing-library';

describe('App Rating List Unit Testing', () => {
	/** Test component rendering */
	it('should render correctly', () => {
		const tree = TestRenderer.create(
			<RatingList rates={[{ Source: 'imdb', Value: 9.0 }]} />,
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	/** Test component rendering children */
	it('should render text prop properly', () => {
		const { getByTestId } = render(
			<RatingList rates={[{ Source: 'imdb', Value: 9.0 }]} />,
		);
		const element = getByTestId('app-rating-list');
		expect(element.children.length).toEqual(1);
	});

	it('should render text prop properly', () => {
		const { getByTestId } = render(<RatingList rates={[]} />);
		const element = getByTestId('app-rating-list');
		expect(element.children.length).toEqual(0);
	});
});
