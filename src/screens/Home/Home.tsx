import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, MovieCard } from '../../components';
import styles from './styles';

interface Props {}

const Home = (props: Props) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Header text={'HOME'} />
		</View>
	);
};

export default Home;
