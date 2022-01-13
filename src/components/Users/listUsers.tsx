/** @format */

import { useState, FC, useLayoutEffect } from 'react';
import CreateTable from '../createTable/index';
import axios, { AxiosResponse } from 'axios';
import { Resp, Rols } from '../../interfaces/Api';
import useAxios from 'axios-hooks';

const ListUsers: FC<{ NewUser: number }> = ({ NewUser }) => {
	const [{ data }] = useAxios<Resp<Rols[]>>('/users');

	const colums = [
		{ field: 'id', headerName: 'ID', width: 120 },
		{ field: 'name', headerName: 'Nombre', width: 120 },
		{ field: 'email', headerName: 'Email', width: 120 },
	];

	const [Users, setUsers] = useState<any[]>([]);

	useLayoutEffect(() => {
		if (data && !NewUser) setUsers(data.info!);
		else {
			axios.get('/users').then(({ data }: AxiosResponse<Resp<any[]>>) => {
				if (data.info) setUsers(data.info);
			});
		}
	}, [data, NewUser]);

	return <CreateTable rows={Users} columns={colums} />;
};

export default ListUsers;
