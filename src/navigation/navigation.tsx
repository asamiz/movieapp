import React, { Ref } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	NavigationContainer,
	NavigationContainerRef,
} from '@react-navigation/native';
import { SearchScreen, MovieScreen } from '../screens';
import { SEARCH_OPTIONS, STACK_OPTIONS, MOVIE_OPTIONS } from './options';

type RootStackParamsList = {
	SearchScreen: undefined;
	MovieScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamsList>();

// So I can navigate to screens from the services files.
const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (name: string, params: object) =>
	navigationRef.current
		? navigationRef.current.navigate(name, params)
		: undefined;

const ScreensStack = () => (
	<RootStack.Navigator screenOptions={STACK_OPTIONS}>
		<RootStack.Screen
			component={SearchScreen}
			name={'SearchScreen'}
			options={SEARCH_OPTIONS}
		/>
		<RootStack.Screen
			component={MovieScreen}
			name={'MovieScreen'}
			options={MOVIE_OPTIONS}
		/>
	</RootStack.Navigator>
);

const AppContainer = () => (
	<NavigationContainer ref={navigationRef}>
		<ScreensStack />
	</NavigationContainer>
);

export default AppContainer;
