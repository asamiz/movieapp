import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const calcWidth = (pixels: number): number => {
	const deviceRatio = (pixels * 100) / 414;
	return wp(deviceRatio);
};

const calcHeight = (pixels: number): number => {
	const deviceRatio = (pixels * 100) / 896;
	return hp(deviceRatio);
};

export { calcWidth, calcHeight, calcHeight as calcFont };
