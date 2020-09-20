import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../common';
import { calcFont, calcHeight, calcWidth } from '../../utils';

const styles = StyleSheet.create({
	topSection: {
		flexDirection: 'row',
		alignItems: 'center',
		height: undefined,
		backgroundColor: COLORS.spaceCadet,
		paddingBottom: calcHeight(20),
		paddingTop: calcHeight(10),
	},
	contentContainer: {
		paddingBottom: calcHeight(40),
	},
	col: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '50%',
		flexGrow: 1,
	},
	section: {
		marginTop: calcHeight(15),
		paddingHorizontal: calcWidth(15),
		backgroundColor: COLORS.spaceCadet,
		paddingVertical: calcHeight(10),
		borderStartColor: COLORS.sun,
		borderStartWidth: 4,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: calcHeight(10),
	},
	image: {
		width: calcWidth(180),
		height: calcHeight(230),
		borderRadius: calcWidth(10),
		borderWidth: 1,
		borderColor: COLORS.sun,
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		color: COLORS.white,
		fontFamily: FONTS.bold,
		fontSize: calcFont(18),
	},
	header: {
		fontSize: calcFont(18),
		fontFamily: FONTS.medium,
	},
	key: {
		fontFamily: FONTS.medium,
		fontSize: calcFont(14),
		color: COLORS.white,
	},
	value: {
		fontSize: calcFont(14),
		color: COLORS.loblolly,
		fontFamily: FONTS.medium,
		flexShrink: 1,
	},
	body: {
		fontSize: calcFont(14),
		fontFamily: FONTS.regular,
		color: COLORS.loblolly,
		lineHeight: 22,
		marginTop: calcHeight(4),
	},
});

export default styles;
