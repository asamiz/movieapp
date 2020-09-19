import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, FONTS } from '../../../common';
import { Header } from '../../../components';
import { calcHeight } from '../../../utils';
import styles from './styles';

interface Props {
	bodyHeader: string;
	bodyText: string;
	iconName: string;
	header: string;
}

const EmptyScreen = ({
 bodyHeader, bodyText, iconName, header,
}: Props) => (
	<View style={styles.container}>
		{header && (
			<Header
				text={'Recent Searches'}
				containerStyle={styles.headerContainer}
				textStyle={styles.header}
			/>
		)}
		<View style={styles.contentContainer}>
			<Icon
				name={iconName}
				size={calcHeight(100)}
				color={COLORS.hitGrey}
				style={styles.iconContainer}
			/>
			<View>
				<Text style={[styles.bodyText, { fontFamily: FONTS.bold }]}>
					{bodyHeader}
				</Text>
				<Text style={styles.bodyText}>{bodyText}</Text>
			</View>
		</View>
	</View>
);

export default EmptyScreen;
