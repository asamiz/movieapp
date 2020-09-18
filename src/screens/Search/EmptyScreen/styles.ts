import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../common';
import { calcFont, calcHeight, calcWidth } from '../../../utils';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '50%',
		paddingHorizontal: calcWidth(30),
	},
	bodyText: {
		textAlign: 'center',
		fontSize: calcFont(17),
		fontFamily: FONTS.medium,
		color: COLORS.cloudBurst,
		marginVertical: calcHeight(10),
	},
	iconContainer: {
		marginBottom: calcHeight(30),
	},
});

export default styles;
