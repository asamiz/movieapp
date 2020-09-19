import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../common';
import { calcFont, calcHeight } from '../../utils';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: calcHeight(100),
		marginTop: calcHeight(15),
	},
	col: {
		flex: 0.33333,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.spaceCadet,
	},
	source: {
		fontFamily: FONTS.bold,
		fontSize: calcFont(14),
		color: COLORS.sun,
	},
	value: {
		fontSize: calcFont(14),
		color: COLORS.loblolly,
		fontFamily: FONTS.medium,
		marginTop: calcHeight(10),
	},
});

export default styles;
