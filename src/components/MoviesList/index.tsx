import React, { ElementType } from 'react';
import { FlatList } from 'react-native';
import { IMovie } from '../../common';
import { MovieCard } from '../MovieCard';
import styles from './styles';

interface Props {
	data: IMovie[];
	ListEmptyComponent: ElementType;
	ListHeaderComponent: ElementType;
}

const MoviesList = ({
	data,
	ListEmptyComponent,
	ListHeaderComponent,
}: Props) => (
	<FlatList
		data={data}
		keyboardShouldPersistTaps={'always'}
		renderItem={({ item }) => (
			<MovieCard
				Title={item.Title}
				Released={item.Released}
				Poster={item.Poster}
				imdbRating={item.imdbRating}
				Country={item.Country}
				Runtime={item.Runtime}
				Rated={item.Rated}
				onPress={item.onPress}
			/>
		)}
		ListEmptyComponent={<ListEmptyComponent />}
		ListHeaderComponent={<ListHeaderComponent />}
		contentContainerStyle={styles.contentContainer}
		keyExtractor={(item) => item.Title}
		showsVerticalScrollIndicator={false}
	/>
);

export { MoviesList };
