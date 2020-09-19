import React from 'react';
import { Text, View } from 'react-native';
import StarRating from 'react-native-star-rating';
import { COLORS } from '../../common';
import styles from './styles';

interface Props {
	rating: number;
}

const Rating = ({ rating }: Props) => (
	<View style={styles.ratingContainer}>
		<StarRating
			disabled={true}
			maxStars={5}
			rating={rating - 5}
			starSize={12}
			emptyStar={'star'}
			fullStar={'star'}
			halfStar={'star-half'}
			emptyStarColor={COLORS.independence}
			fullStarColor={COLORS.sun}
			starStyle={styles.star}
		/>
		<Text style={styles.rating}>{`${rating} / 10`}</Text>
	</View>
);

export { Rating };
