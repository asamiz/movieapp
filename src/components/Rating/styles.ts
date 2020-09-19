import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../common';
import { calcFont, calcHeight, calcWidth } from '../../utils';

const styles = StyleSheet.create({
	star: {
		marginLeft: calcWidth(2),
	},
	rating: {
		color: COLORS.sun,
		fontFamily: FONTS.bold,
		fontSize: calcFont(14),
		marginStart: calcWidth(10),
	},
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: calcHeight(8),
	},
});

export default styles;
