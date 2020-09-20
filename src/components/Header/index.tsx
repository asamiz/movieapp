import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface Props {
	text: string;
	containerStyle?: object;
	textStyle?: object;
}

const Header = ({ text, containerStyle, textStyle }: Props) => (
	<View style={containerStyle}>
		<Text style={[styles.text, textStyle]}>{text}</Text>
	</View>
);

export { Header };
