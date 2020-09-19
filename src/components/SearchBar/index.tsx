import React from 'react';
import { Pressable, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { COLORS } from '../../common';
import { calcHeight } from '../../utils';
import styles from './styles';

interface Props {
	onChangeText: (value: string) => void;
	onPress: () => void;
	value: string;
}

const SearchBar = ({ onPress, onChangeText, value }: Props) => (
	<View style={styles.container}>
		<TextInput
			style={styles.inputContainer}
			placeholder={'Search Movies ...'}
			onChangeText={onChangeText}
			value={value}
		/>
		<Pressable style={styles.iconContianer} onPress={onPress}>
			<Icon name="magnifying-glass" size={calcHeight(30)} color={COLORS.sun} />
		</Pressable>
	</View>
);

export { SearchBar };
