import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Button, View } from 'react-native';
import { Header, SearchBar, MoviesList } from '../../components';
import EmptyScreen from './EmptyScreen';
import styles from './styles';

const Search = () => {
	const [query, setQuery] = useState('');
	const navigation = useNavigation();
	return (
		<>
			<View style={styles.container}>
				<Header text={'Search'} />
				<SearchBar
					onPress={() => Alert.alert('Hello')}
					value={query}
					onChangeText={(value) => setQuery(value)}
				/>
			</View>
			{/* <Button
				title={'Movie'}
				onPress={() => navigation.navigate('MovieScreen')}
			/> */}
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
