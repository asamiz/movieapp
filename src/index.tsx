import React, { useEffect } from 'react';
import {
 View, Text, StyleSheet, StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { COLORS, FONTS } from './common';

const App: React.FC<{}> = () => {
	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hide();
		}, 500);
	}, []);

	return (
		<>
			<StatusBar
				backgroundColor={COLORS.oxfordBlue}
				barStyle={'light-content'}
			/>
			<View style={styles.container}>
				<Text style={styles.text}>{'Movie App'}</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontFamily: FONTS.bold,
		color: COLORS.oxfordBlue,
	},
});

export default App;
