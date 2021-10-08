import axios, { AxiosResponse } from 'axios';
import { Api } from '../interfaces';
import { AxiosError } from 'axios';
import Swal from './Alert';

// Set config defaults when creating the instance

// config
axios.defaults.baseURL = 'http://localhost:2021';
axios.defaults.headers.common['token'] = localStorage.getItem('token');
axios.defaults.headers['Content-Type'] = 'application/json';

axios.interceptors.response.use(
	(resp: AxiosResponse<Api.Resp>): AxiosResponse<Api.Resp> => {
		if (resp.data.token) localStorage.setItem('token', resp.data.token);
		const { message } = resp.data;

		Swal.fire({
			title: message,
			icon: 'success',
			showConfirmButton: false,
			timer: 1500,
		});

		return resp;
	},
	(err: AxiosError<Api.Error>) => {
		if (err.response) {
			const { message } = err.response.data;

			Swal.fire({
				title: message,
				icon: 'error',
				showConfirmButton: false,
				timer: 1500,
			});
		}

		return err;
	},
);
