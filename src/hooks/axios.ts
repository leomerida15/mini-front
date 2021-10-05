import axios, { AxiosResponse } from 'axios';
import { Api } from '../interfaces';

// Set config defaults when creating the instance

// config
axios.defaults.baseURL = 'http://localhost:2021';
axios.defaults.headers.common['token'] = localStorage.getItem('token');
axios.defaults.headers['Content-Type'] = 'application/json';

axios.interceptors.response.use((resp: AxiosResponse<Api.Resp>): AxiosResponse<Api.Resp> => {
	if (resp.data.token) localStorage.setItem('token', resp.data.token);
	return resp;
});
