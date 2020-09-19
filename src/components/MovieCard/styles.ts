import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../common';
import { calcFont, calcHeight, calcWidth } from '../../utils';

const styles = StyleSheet.create({
	container: {
		height: undefined,
		backgroundColor: COLORS.spaceCadet,
		borderRadius: calcHeight(10),
		minHeight: calcHeight(170),
		marginTop: calcHeight(80),
		paddingVertical: calcHeight(18),
		shadowColor: COLORS.black,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 8,
	},
	contentContainer: {
		left: '42%',
		width: '50%',
	},
	image: {
		position: 'absolute',
		bottom: calcHeight(40),
		borderRadius: calcHeight(15),
		width: calcWidth(130),
		height: calcHeight(190),
		marginStart: calcWidth(12),
	},
	title: {
		color: COLORS.white,
		fontFamily: FONTS.bold,
		fontSize: calcFont(18),
	},
	bodyText: {
		fontFamily: FONTS.medium,
		marginBottom: calcHeight(8),
		fontSize: calcFont(12),
		color: COLORS.white,
	},
});

export default styles;
