module.exports = {
	preset: 'react-native',
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
			'jest-transform-stub',
		'\\.(css|less)$': 'identity-obj-proxy',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	setupFiles: [
		'./jest.setup.js',
		'./node_modules/react-native-gesture-handler/jestSetup.js',
	],
};
