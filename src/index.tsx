import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Store from './store';
import { COLORS } from './common';
import AppContainer from './navigation';

const App: React.FC<{}> = () => {
	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hide();
		}, 500);
	}, []);

	return (
		<Provider store={Store.store}>
			<PersistGate persistor={Store.persistor} loading={null}>
				<StatusBar
					backgroundColor={COLORS.oxfordBlue}
					barStyle={'light-content'}
				/>
				<AppContainer />
			</PersistGate>
		</Provider>
	);
};

export default App;
