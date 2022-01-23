import axios, { AxiosResponse } from 'axios';
import { configure } from 'axios-hooks';
import LRU from 'lru-cache'
import { Resp } from '../interfaces/Api';

// Set config defaults when creating the instance

// config
axios.defaults.baseURL = 'https://sabaneta.miproyectoparticipativo.com/v1';
// axios.defaults.baseURL = 'http://localhost:5000/v1';
// 
axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
axios.defaults.headers['Content-Type'] = 'application/json';


axios.interceptors.response.use<AxiosResponse<Resp>>(
	(resp) => {
		if (resp.data && resp.data.token) localStorage.setItem('token', resp.data.token);
		return resp;
	},
);


const cache = new LRU({ max: 10 })


configure({ axios, cache })

export default axios;