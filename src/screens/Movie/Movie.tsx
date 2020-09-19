import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useRoute } from '@react-navigation/native';
import { Header, RatingList } from '../../components';
import styles from './styles';

interface IData {
	data?: any;
}

const Movie = () => {
	const route = useRoute();
	const { data }: IData = route.params!;

	const renderRow = (key: string) => (
		<View style={styles.row}>
			<Text style={styles.key}>{key}</Text>
		</View>
	);

	const renderTitledSection = (header: string, body: string) => (
		<View style={styles.section}>
			<Header text={header} textStyle={styles.header} />
			<Text style={styles.body}>{body}</Text>
		</View>
	);

	return (
		<>
			<View style={styles.topSection}>
				<View style={styles.col}>
					<FastImage source={{ uri: data.Poster }} style={styles.image} />
				</View>
				<View style={[styles.col, { alignItems: 'flex-start' }]}>
					<Text style={styles.title}>{data.Title}</Text>
					{renderRow(data.Released)}
					{renderRow(data.Genre)}
					{renderRow(data.Runtime)}
				</View>
			</View>
			<ScrollView>
				<RatingList rates={data.Ratings} />
				{renderTitledSection('Summary', data.Plot)}
				{renderTitledSection('Director', data.Director)}
				{renderTitledSection('Actors', data.Actors)}
			</ScrollView>
		</>
	);
};

export default Movie;
