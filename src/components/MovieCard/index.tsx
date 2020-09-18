import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Rating } from '../Rating';
import styles from './styles';

interface Rates {
	Source: string;
	Value: number;
}

interface Props {
	title: string;
	releaseDate: string;
	poster: string;
	ratings: Rates[];
	country: string;
	runtime: string;
	rated: string;
}

const MovieCard = ({
	title,
	releaseDate,
	poster,
	ratings,
	country,
	rated,
	runtime,
}: Props) => (
	<View style={styles.container}>
		<View style={styles.contentContainer}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.ratingContainer}>
				<Rating rating={ratings[0]?.Value} />
				<Text style={styles.rating}>{'9.0'}</Text>
			</View>
			<Text style={styles.bodyText}>{`Released: ${releaseDate}`}</Text>
			<Text style={styles.bodyText}>{`${runtime}  ${rated}  ${country}`}</Text>
		</View>
		<FastImage
			source={{ uri: poster }}
			resizeMode={'stretch'}
			style={styles.image}
		/>
	</View>
);

export { MovieCard };
