import { StyleSheet } from 'react-native';
import { COLORS, FONTS, STYLES } from '../../common';
import { calcFont } from '../../utils';

const styles = StyleSheet.create({
	text: {
		color: COLORS.white,
		fontSize: calcFont(30),
		fontFamily: FONTS.bold,
	},
});

export default styles;
