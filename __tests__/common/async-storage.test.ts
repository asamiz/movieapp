import AsyncStorage from '@react-native-community/async-storage';

it('should store the value correctly', async () => {
	await AsyncStorage.setItem('myKey', 'myValue');
	const value = await AsyncStorage.getItem('myKey');
	expect(value).toBe('myValue');
});

it('should get the correct key', async () => {
	expect(AsyncStorage.getItem).toBeCalledWith('myKey');
});
