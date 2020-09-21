import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Header } from '../../src/components';
import { render } from 'react-native-testing-library';

describe('App Header Unit Testing', () => {
	/** Test component rendering */
	it('should render correctly', () => {
		const tree = TestRenderer.create(<Header text={'CARA CARE'} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	/** Test required passed values */
	it('should render text prop properly', () => {
		const { getByTestId } = render(<Header text={'Test'} />);
		const element = getByTestId('app-header-text');
		expect(element.children[0]).toBe('Test');
	});
});
