import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { Header, SearchBar, MoviesList } from '../../components';
import EmptyScreen from './EmptyScreen';
import styles from './styles';

const Search = () => {
	const [query, setQuery] = useState('');
	const navigation = useNavigation();
	return (
		<>
			<View style={styles.container}>
				<SearchBar
					onPress={() => Alert.alert('Hello')}
					value={query}
					onChangeText={(value) => setQuery(value)}
				/>
			</View>
			<MoviesList
				data={[]}
				ListEmptyComponent={() => (
					<EmptyScreen
						iconName={'emoticon-sad-outline'}
						bodyHeader={`There is no result for "${query}"`}
						bodyText={'Please make sure you entered a proper search value.'}
					/>
				)}
			/>
		</>
	);
};

export default Search;
