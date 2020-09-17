/* I will use JS object literals here as I want to export a nested objects */

import { calcFont, calcWidth } from '../utils';
import { COLORS } from './colors';
import { FONTS } from './fonts';

export const STYLES: any = {
	globalContainers: {
		backgroundColor: COLORS.oxfordBlue,
		paddingHorizontal: calcWidth(30),
	},
	globalHeaders: {
		color: COLORS.sun,
		fontSize: calcFont(30),
		fontFamily: FONTS.bold,
	},
};
