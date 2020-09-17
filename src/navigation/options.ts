import { StackNavigationOptions } from '@react-navigation/stack';
/** This file contains screen navigation options */
import { COLORS } from '../common';

const SCREENS_OPTIONS: StackNavigationOptions = {
	title: '',
	headerStyle: {
		backgroundColor: COLORS.oxfordBlue,
		borderBottomWidth: 0,
		elevation: 0,
		shadowOpacity: 0,
	},
	headerBackTitleVisible: false,
	headerLeft: () => null,
};

const STACK_OPTIONS: StackNavigationOptions = {
	cardStyle: {
		backgroundColor: COLORS.oxfordBlue,
	},
};

export { SCREENS_OPTIONS, STACK_OPTIONS };
