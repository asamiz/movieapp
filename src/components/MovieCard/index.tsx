import React from 'react';
import { Text, View, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { IMovie } from '../../common';
import { Rating } from '../Rating';
import styles from './styles';

const MovieCard = ({
	Title,
	Released,
	Poster,
	Country,
	imdbRating,
	Rated,
	Runtime,
	onPress,
}: IMovie) => (
	<Pressable style={styles.container} onPress={onPress}>
		<View style={styles.contentContainer}>
			<Text style={styles.title}>{Title}</Text>
			<Rating rating={parseFloat(imdbRating!)} />
			<Text style={styles.bodyText}>{`Released: ${Released}`}</Text>
			<Text style={styles.bodyText}>{`${Runtime}  ${Rated}  ${Country}`}</Text>
		</View>
		<FastImage
			source={{ uri: Poster }}
			resizeMode={'stretch'}
			style={styles.image}
		/>
	</Pressable>
);

export { MovieCard };
