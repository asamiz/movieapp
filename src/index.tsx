import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from './common';

const App: React.FC<{}> = () => (
	<View style={styles.container}>
		<Text style={styles.text}>{'Movie App'}</Text>
	</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.oxfordBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: FONTS.bold,
    color: COLORS.aquamarine,
  },
});

export default App;
