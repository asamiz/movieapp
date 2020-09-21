import { useNavigation } from '@react-navigation/native';
import React, { ElementType } from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { IShortMovie } from '../../common';
import { storeMovie } from '../../store/actions';
import { MovieCard } from '../MovieCard';
import styles from './styles';

interface Props {
	data: IShortMovie[];
	ListEmptyComponent: ElementType;
	ListHeaderComponent: ElementType;
}

const MoviesList = ({
	data,
	ListEmptyComponent,
	ListHeaderComponent,
}: Props) => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const onPressCard = (movie: IShortMovie) => {
		dispatch(storeMovie(movie));
		navigation.navigate('MovieScreen', { id: movie.imdbID });
	};

	return (
		<FlatList
			testID={'app-movie-list'}
			data={data}
			keyboardShouldPersistTaps={'always'}
			renderItem={({ item }) => (
				<MovieCard
					Title={item.Title}
					imdbID={item.imdbID}
					Poster={item.Poster}
					Year={item.Year}
					onPress={() => onPressCard(item)}
				/>
			)}
			ListEmptyComponent={<ListEmptyComponent />}
			ListHeaderComponent={<ListHeaderComponent />}
			contentContainerStyle={styles.contentContainer}
			keyExtractor={(item) => item.imdbID}
			showsVerticalScrollIndicator={false}
		/>
	);
};

export { MoviesList };
