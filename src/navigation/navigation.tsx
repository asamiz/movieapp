import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SearchScreen, HomeScreen, MovieScreen } from '../screens';

type RootStackParamsList = {
	HomeScreen: undefined;
	SearchScreen: undefined;
	MovieScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamsList>();

const ScreensStack = () => (
	<RootStack.Navigator>
		<RootStack.Screen component={HomeScreen} name={'HomeScreen'} />
		<RootStack.Screen component={SearchScreen} name={'SearchScreen'} />
		<RootStack.Screen component={MovieScreen} name={'MovieScreen'} />
	</RootStack.Navigator>
);

const AppContainer = () => (
	<NavigationContainer>
		<ScreensStack />
	</NavigationContainer>
);

export default AppContainer;
