/** @format */

import { useState, FC, useLayoutEffect } from 'react';
import CreateTable from '../../../../components/createTable/index';
import axios, { AxiosResponse } from 'axios';
import { Resp, Rols } from '../../../../interfaces/Api';
import useAxios from 'axios-hooks';
import { useContextElection } from './index';
import { TableActions } from '../../../../components/createTable/interface';

const ListElection: FC = () => {
	const { NewElection, defineElection, EditModal } = useContextElection();

	const [{ data }] = useAxios<Resp<Rols[]>>('/elections');

	const colums = [
		{ field: 'id', headerName: 'ID', width: 120 },
		{ field: 'name', headerName: 'Nombre', width: 170 },
		{ field: 'status', headerName: 'Status', width: 150 },
	];

	const [Election, setElection] = useState<any[]>([]);

	useLayoutEffect(() => {
		if (data && !NewElection) setElection(data.info!);
		else {
			axios.get('/elections').then(({ data }: AxiosResponse<Resp<any[]>>) => {
				if (data.info) setElection(data.info);
			});
		}
	}, [NewElection, data]);

	const actions: TableActions = {
		edit: (row: any) => {
			defineElection(row);
			EditModal();
		},
	};

	return (
		<>
			<CreateTable rows={Election} columns={colums} actions={actions} />
		</>
	);
};

export default ListElection;
