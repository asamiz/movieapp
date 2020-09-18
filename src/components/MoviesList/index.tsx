import React, { ElementType } from 'react';
import { FlatList } from 'react-native';
import { IMovie } from '../../common';
import { MovieCard } from '../MovieCard';

interface Props {
	data: IMovie[];
	ListEmptyComponent: ElementType;
}

const MoviesList = ({ data, ListEmptyComponent }: Props) => (
	<FlatList
		data={data}
		renderItem={({ item }) => (
			<MovieCard
				Title={item.Title}
				Released={item.Released}
				Poster={item.Poster}
				Ratings={item.Ratings}
				Country={item.Country}
				Runtime={item.Runtime}
				Rated={item.Rated}
				onPress={item.onPress}
			/>
		)}
		ListEmptyComponent={<ListEmptyComponent />}
		showsVerticalScrollIndicator={false}
	/>
);

export { MoviesList };
