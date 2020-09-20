import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
	COLORS,
	EMPTY_SCREEN_DATA,
	ISearchedMovieResponse,
} from '../../common';
import { SearchBar, MoviesList, Header } from '../../components';
import { getMoviesLits } from '../../services';
import EmptyScreen from './EmptyScreen';
import styles from './styles';

const Search = () => {
	const [query, setQuery] = useState('');
	const [requestData, setRequestData] = useState<ISearchedMovieResponse>();
	const [loading, setLoading] = useState(false);

	const { movies }: any = useSelector((state) => state);

	const onPressSearch = async () => {
		setLoading(true);
		const requestData: ISearchedMovieResponse = await getMoviesLits(query);
		setRequestData(requestData);
		setLoading(false);
	};

	const onChangeText = async (value: string) => {
		setLoading(true);
		setQuery(value);
		const requestData: ISearchedMovieResponse = await getMoviesLits(value);
		setRequestData(requestData);
		setLoading(false);
	};

	const renderListEmptyComponent = () =>
		requestData?.error ? (
			<EmptyScreen
				iconName={EMPTY_SCREEN_DATA.search.icon}
				bodyHeader={EMPTY_SCREEN_DATA.search.header}
				bodyText={EMPTY_SCREEN_DATA.search.body}
			/>
		) : (
			<EmptyScreen
				iconName={EMPTY_SCREEN_DATA.history.icon}
				bodyHeader={EMPTY_SCREEN_DATA.history.header}
				bodyText={EMPTY_SCREEN_DATA.history.body}
			/>
		);

	return (
		<>
			<View style={styles.container}>
				<SearchBar
					onPress={() => onPressSearch()}
					value={query}
					onChangeText={(value) => onChangeText(value)}
				/>
			</View>
			{loading ? (
				<ActivityIndicator
					style={styles.activityIndicator}
					color={COLORS.sun}
				/>
			) : (
				<MoviesList
					data={
						requestData?.movies! && query !== '' ? requestData?.movies! : movies
					}
					ListEmptyComponent={() => renderListEmptyComponent()}
					ListHeaderComponent={() => (
						<Header
							text={requestData?.movies ? 'Search Result' : 'Recent Searches'}
							containerStyle={styles.headerContainer}
							textStyle={styles.header}
						/>
					)}
				/>
			)}
		</>
	);
};

export default Search;
