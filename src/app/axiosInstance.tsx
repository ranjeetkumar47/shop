import axios from 'axios';

import { STRING } from '@/constant/string';

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_URL,
});

let startTime: number | null = null;

axiosInstance.interceptors.request.use(
	(config) => {
		startTime = new Date().getTime();
		const token = { token: 'Hello' };
		if (token?.token) {
			config.headers[STRING.AUTHORIZATION] = `Bearer ${token?.token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosInstance;
