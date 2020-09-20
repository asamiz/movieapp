import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS, EMPTY_SCREEN_DATA, IRequestData } from '../../common';
import { SearchBar, MoviesList, Header } from '../../components';
import { getMovies } from '../../services';
import EmptyScreen from './EmptyScreen';
import styles from './styles';

const Search = () => {
	const [query, setQuery] = useState('');
	const [requestData, setRequestData] = useState<IRequestData>();
	const [loading, setLoading] = useState(false);

	const { movies }: any = useSelector((state) => state);

	const onPressSearch = async () => {
		setLoading(true);
		const requestData: IRequestData = await getMovies(query);
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
					onChangeText={(value) => setQuery(value)}
				/>
			</View>
			{loading ? (
				<ActivityIndicator
					style={styles.activityIndicator}
					color={COLORS.sun}
				/>
			) : (
				<MoviesList
					data={requestData?.data! ? requestData?.data! : movies}
					ListEmptyComponent={() => renderListEmptyComponent()}
					ListHeaderComponent={() => (
						<Header
							text={requestData?.data ? 'Search Result' : 'Recent Searches'}
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
