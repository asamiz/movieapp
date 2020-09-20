import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth } from '../../utils';

const styles = StyleSheet.create({
	contentContainer: {
		paddingHorizontal: calcWidth(20),
		paddingBottom: calcHeight(30),
	},
});

export default styles;
