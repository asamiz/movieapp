import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import Logger from 'redux-logger';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { storingMovieReducer } from './reducers';

/* MiddleWare for redux */
const middleware = applyMiddleware(thunk, Logger);

/* Config for Redux Persist */
const config = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: [],
	whitelist: [],
};

const persistedReducer = persistReducer(config, storingMovieReducer);
const store = createStore(persistedReducer, {}, middleware);
const persistor = persistStore(store);

export default { store, persistor };
