import { StyleSheet } from 'react-native';
import { COLORS, FONTS, STYLES } from '../../../common';
import { calcFont, calcHeight, calcWidth } from '../../../utils';

const styles = StyleSheet.create({
	container: {
		...STYLES.globalPadding,
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
	headerContainer: {
		marginTop: calcHeight(20),
		borderBottomWidth: 2,
		borderBottomColor: COLORS.sun,
		width: calcWidth(158),
		paddingBottom: calcHeight(10),
	},
	header: {
		fontSize: calcFont(18),
		color: COLORS.white,
		fontFamily: FONTS.bold,
	},
});

export default styles;
