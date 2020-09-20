import React, { useEffect } from 'react';
import {
 ActivityIndicator, ScrollView, Text, View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { useRoute } from '@react-navigation/native';
import { useStateIfMounted } from 'use-state-if-mounted';
import { Header, RatingList } from '../../components';
import {
	COLORS,
	DUMMY_IMAGE,
	IMovie,
	IMovieDetailsResponse,
} from '../../common';
import styles from './styles';
import { getMovieDetails } from '../../services';

const Movie = () => {
	const [movieData, setMovieData] = useStateIfMounted<IMovie>({});
	const route = useRoute();
	const { id }: any = route.params!;

	useEffect(() => {
		onLoad();
	}, [movieData]);

	const onLoad = async () => {
		const data: IMovieDetailsResponse = await getMovieDetails(id);
		setMovieData(data.movie);
	};

	const renderRow = (key: any) => (
		<View style={styles.row}>
			<Text style={styles.key}>{key}</Text>
		</View>
	);

	const renderTitledSection = (header: any, body: any) => (
		<View style={styles.section}>
			<Header text={header} textStyle={styles.header} />
			<Text style={styles.body}>{body}</Text>
		</View>
	);

	return !Object.keys(movieData).length ? (
		<ActivityIndicator style={styles.activityIndicator} color={COLORS.sun} />
	) : (
		<>
			<View style={styles.topSection}>
				<View style={styles.col}>
					<FastImage
						source={{
							uri:
								movieData!.Poster === 'N/A' ? DUMMY_IMAGE : movieData!.Poster,
						}}
						style={styles.image}
					/>
				</View>
				<View style={[styles.col, { alignItems: 'flex-start' }]}>
					<Text style={styles.title}>{movieData!.Title}</Text>
					{renderRow(movieData!.Released)}
					{renderRow(movieData!.Genre)}
					{renderRow(movieData!.Runtime)}
				</View>
			</View>
			<ScrollView
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={false}
			>
				<RatingList rates={movieData!.Ratings} />
				{renderTitledSection('Summary', movieData!.Plot)}
				{renderTitledSection('Director', movieData!.Director)}
				{renderTitledSection('Actors', movieData!.Actors)}
			</ScrollView>
		</>
	);
};

export default Movie;
