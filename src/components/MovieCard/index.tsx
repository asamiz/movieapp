import React from 'react';
import { Text, View, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { DUMMY_IMAGE, IShortMovie } from '../../common';
import styles from './styles';

const MovieCard = ({
 Title, Poster, Year, onPress,
}: IShortMovie) => (
	<Pressable style={styles.container} onPress={onPress}>
		<View style={styles.contentContainer}>
			<Text style={styles.title}>{Title}</Text>
			<Text style={styles.bodyText}>{`Released: ${Year}`}</Text>
		</View>
		<FastImage
			source={{ uri: Poster === 'N/A' ? DUMMY_IMAGE : Poster }}
			resizeMode={'stretch'}
			style={styles.image}
		/>
	</Pressable>
);

export { MovieCard };
