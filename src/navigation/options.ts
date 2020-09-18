import { StackNavigationOptions } from '@react-navigation/stack';
/** This file contains screen navigation options */
import { COLORS } from '../common';
import { calcWidth } from '../utils';

const SEARCH_OPTIONS: StackNavigationOptions = {
	title: '',
	headerStyle: {
		backgroundColor: COLORS.oxfordBlue,
		borderBottomWidth: 0,
		elevation: 0,
		shadowOpacity: 0,
	},
	headerBackTitleVisible: false,
};

const STACK_OPTIONS: StackNavigationOptions = {
	cardStyle: {
		backgroundColor: COLORS.oxfordBlue,
	},
};

const MOVIE_OPTIONS: StackNavigationOptions = {
	title: '',
	headerStyle: {
		backgroundColor: COLORS.spaceCadet,
		borderBottomWidth: 0,
		elevation: 0,
		shadowOpacity: 0,
	},
	headerBackTitleVisible: false,
	headerTintColor: COLORS.sun,
};

export { SEARCH_OPTIONS, STACK_OPTIONS, MOVIE_OPTIONS };
