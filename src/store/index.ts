import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import Logger from 'redux-logger';
import Thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { storingMovieReducer } from './reducers';

/* MiddleWare for redux */
const middleware = applyMiddleware(Thunk, Logger);

/* Config for Redux Persist */
const config = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(config, storingMovieReducer);
const store: any = createStore(persistedReducer, {}, middleware);
const persistor = persistStore(store);

export default { store, persistor };
