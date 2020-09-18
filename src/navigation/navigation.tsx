import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SearchScreen, MovieScreen } from '../screens';
import { SEARCH_OPTIONS, STACK_OPTIONS, MOVIE_OPTIONS } from './options';

type RootStackParamsList = {
	HomeScreen: undefined;
	SearchScreen: undefined;
	MovieScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamsList>();

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
	<NavigationContainer>
		<ScreensStack />
	</NavigationContainer>
);

export default AppContainer;
