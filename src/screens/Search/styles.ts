import { StyleSheet } from 'react-native';
import { COLORS, FONTS, STYLES } from '../../common';
import { calcFont, calcHeight, calcWidth } from '../../utils';

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: calcWidth(20),
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
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
	contentContainer: {
		paddingBottom: calcHeight(30),
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default styles;
