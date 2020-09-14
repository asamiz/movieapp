import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import App from '../src';

// Note: test renderer must be required after react-native.

/* eslint-disable */
it('renders correctly', () => {
	renderer.create(<App />);
});
