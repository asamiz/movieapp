import { StyleSheet } from 'react-native';
import { STYLES } from '../../common';

const styles = StyleSheet.create({
	container: {
		...STYLES.globalPadding,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});

export default styles;
