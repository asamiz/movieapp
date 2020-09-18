import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SearchScreen, MovieScreen } from '../screens';
import { SCREENS_OPTIONS, STACK_OPTIONS } from './options';

type RootStackParamsList = {
	HomeScreen: undefined;
	SearchScreen: undefined;
	MovieScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamsList>();

const ScreensStack = () => (
	<RootStack.Navigator screenOptions={STACK_OPTIONS} headerMode={'screen'}>
		<RootStack.Screen
			component={SearchScreen}
			name={'SearchScreen'}
			options={SCREENS_OPTIONS}
		/>
		<RootStack.Screen
			component={MovieScreen}
			name={'MovieScreen'}
			options={SCREENS_OPTIONS}
		/>
	</RootStack.Navigator>
);

const AppContainer = () => (
	<NavigationContainer>
		<ScreensStack />
	</NavigationContainer>
);

export default AppContainer;
