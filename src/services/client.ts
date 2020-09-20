import axios from 'axios';
import { API_KEY, baseURL } from '../common';

export default async () => {
	const instance = axios.create();
	instance.defaults.baseURL = baseURL;
	instance.defaults.headers.post['Content-Type'] = 'application/json';
	instance.defaults.timeout = 30000;

	instance.interceptors.request.use((config) => ({
		...config,
		params: {
			...config.params,
			apikey: API_KEY,
			type: 'movie',
			plot: 'full',
		},
	}));

	instance.interceptors.response.use(
		(response) => response,
		(error) => Promise.reject(error),
	);
	return instance;
};
