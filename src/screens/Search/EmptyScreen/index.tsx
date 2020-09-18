import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, FONTS } from '../../../common';
import { calcHeight } from '../../../utils';
import styles from './styles';

interface Props {
	bodyHeader: string;
	bodyText: string;
	iconName: string;
}

const EmptyScreen = ({ bodyHeader, bodyText, iconName }: Props) => (
	<View style={styles.container}>
		<Icon
			name={iconName}
			size={calcHeight(100)}
			color={COLORS.cloudBurst}
			style={styles.iconContainer}
		/>
		<View>
			<Text style={[styles.bodyText, { fontFamily: FONTS.bold }]}>
				{bodyHeader}
			</Text>
			<Text style={styles.bodyText}>{bodyText}</Text>
		</View>
	</View>
);

export default EmptyScreen;
