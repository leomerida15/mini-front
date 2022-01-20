/** @format */

import { useState, FC, useLayoutEffect } from 'react';
import CreateTable from '../../../../components/createTable/index';
import axios, { AxiosResponse } from 'axios';
import { Resp, Rols } from '../../../../interfaces/Api';
import useAxios from 'axios-hooks';
import { useContextUsers } from './index';
import { TableActions } from '../../../../components/createTable/interface';
import { Api } from '../../../../interfaces';

const ListUsers: FC = () => {
	const { NewUser, defineUser, Rols, EditModal } = useContextUsers();

	const [{ data }] = useAxios<Resp<Rols[]>>('/users');

	const colums = [
		{ field: 'id', headerName: 'ID', width: 120 },
		{ field: 'name', headerName: 'Nombre', width: 170 },
		{ field: 'email', headerName: 'Email', width: 170 },
		{ field: 'roles', headerName: 'Roles', width: 170 },
	];

	const [Users, setUsers] = useState<any[]>([]);

	useLayoutEffect(() => {
		if (data && !NewUser) setUsers(data.info!);
		else {
			axios.get('/users').then(({ data }: AxiosResponse<Resp<any[]>>) => {
				if (data.info) setUsers(data.info);
			});
		}
	}, [NewUser, data]);

	const actions: TableActions = {
		edit: (row: any) => {
			const roles = Rols.filter((rol) => row.roles.includes(rol.name));

			const user: Api.User = { ...row, roles };

			defineUser(user);
			EditModal();
		},
	};

	return (
		<>
			<CreateTable rows={Users} columns={colums} actions={actions} />
		</>
	);
};

export default ListUsers;
