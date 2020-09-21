import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface Props {
	text: string;
	containerStyle?: object;
	textStyle?: object;
}

const Header = ({ text, containerStyle, textStyle }: Props) => (
	<View style={containerStyle} testID={'app-header-container'}>
		<Text style={[styles.text, textStyle]} testID={'app-header-text'}>
			{text}
		</Text>
	</View>
);

export { Header };
