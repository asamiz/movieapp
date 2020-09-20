import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../common';
import { calcFont, calcHeight, calcWidth } from '../../../utils';

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: calcWidth(20),
	},
	contentContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '45%',
	},
	bodyText: {
		textAlign: 'center',
		fontSize: calcFont(17),
		fontFamily: FONTS.medium,
		color: COLORS.hitGrey,
		marginVertical: calcHeight(10),
	},
	iconContainer: {
		marginBottom: calcHeight(30),
	},
});

export default styles;
