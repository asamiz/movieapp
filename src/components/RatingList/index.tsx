import React from 'react';
import { View, Text } from 'react-native';
import { IRates } from '../../common';
import styles from './styles';

interface Props {
	rates?: any;
}

const RatingList = ({ rates }: Props) => (
	<View style={styles.container} testID={'app-rating-list'}>
		{rates?.map((item: IRates, index: number) => (
			<View key={item.Source + 1} style={styles.col}>
				<Text style={styles.source}>{index === 0 ? 'IMDB' : item.Source}</Text>
				<Text style={styles.value}>{item.Value}</Text>
			</View>
		))}
	</View>
);

export { RatingList };
