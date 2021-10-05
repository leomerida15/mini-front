import { Meta } from 'react-router-guards/dist/types';

export interface meta extends Meta {
	auth: boolean;
}
export interface Route {
	path: string;
	component: any;
	meta: meta;
}

export interface Resp<info = any> {
	message: string;
	info?: info;
	token: string;
}

export interface Error {
	message: string;
	code: number;
	status: boolean;
	method: string;
	path: string;
}

export interface params {
	id: string | number;
}

export interface pMunicipio {
	id_estado: string | number;
}

export interface pParroquia {
	id_municipio: string | number;
}

export interface pCiudad {
	id_estado: string | number;
}
