export function getRating(rating: string): number {
	const splittedRating = rating.split('/');
	const parsedRating = parseFloat(splittedRating[0]);
	return parsedRating;
}
