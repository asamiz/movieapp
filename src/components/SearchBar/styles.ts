import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../common';
import { calcFont, calcHeight, calcWidth } from '../../utils';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		height: calcHeight(50),
		backgroundColor: COLORS.spaceCadet,
		overflow: 'hidden',
		borderRadius: 5,
	},
	inputContainer: {
		backgroundColor: COLORS.spaceCadet,
		height: '100%',
		paddingStart: calcWidth(10),
		width: '80%',
		color: COLORS.white,
		fontFamily: FONTS.medium,
		fontSize: calcFont(16),
	},
	iconContianer: {
		height: '100%',
		width: '20%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.cloudBurst,
		borderStartWidth: 1,
		borderStartColor: COLORS.sun,
	},
});

export default styles;
