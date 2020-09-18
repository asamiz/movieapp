import React from 'react';
import StarRating from 'react-native-star-rating';
import { COLORS } from '../../common';
import styles from './styles';

interface Props {
	rating: number;
}

const Rating = ({ rating }: Props) => (
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
);

export { Rating };
