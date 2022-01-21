/** @format */

import { useLayoutEffect, useState } from 'react';
import { FC } from 'react';
import * as yup from 'yup';
import { InputAdornment } from '@mui/material';
import { AccountCircle } from '@material-ui/icons';
import LockIcon from '@mui/icons-material/Lock';
import { fromInput, formAction } from '../../../../components/createForm/interface';
import Swal from '../../../../hooks/Alert';
import axios from 'axios';
import { useContextElection } from './index';
import ModalWin from '../../../../components/Modal/index';
import { AlertError } from '../../../../hooks/Alert';
import CreateForm from '../../../../components/createForm/indexa';
import Loader from '../../../../components/loader';

const schema = yup.object().shape({
	name: yup.string(),
	status: yup.string(),
});

const EditElection: FC = () => {
	const { reFreshList, openEditModal, EditModal, status, Election } = useContextElection();

	const [ViewForm, setViewForm] = useState(false);

	const Action: formAction = async (data) => {
		try {
			//
			setViewForm(true);

			const body = Object.fromEntries(
				Object.entries(data)
					.filter(([key, value]) => value)
					.map(([key, value]) => {
						if (key === 'status') {
							const item = status.find((stat: any) => data.status === stat.name)!.id;

							return [key, item!];
						}

						return [key, value];
					}),
			);

			if (!Object.keys(body).length) throw new Error('No se puede actualizar una elección sin cambios');

			const resp = await axios.put('/elections/' + Election.id, body);

			Swal.fire({ title: 'OK', text: resp.data.message, icon: 'success' });

			setTimeout(() => {
				EditModal();
				setViewForm(false);
			}, 1000);

			reFreshList();
		} catch (err: any) {
			console.error(err);
			AlertError(err);
		}
	};

	const [FromInput, setFromInput] = useState<fromInput[]>([
		{
			type: 'text',
			name: 'name',
			label: 'Nombre',
			autoFocus: true,
			rules: (value: any) => {
				return {
					required: false,
				};
			},
			InputProps: {
				startAdornment: (
					<InputAdornment position='start'>
						<AccountCircle />
					</InputAdornment>
				),
			},
		},
		{
			type: 'select',
			name: 'status',
			label: 'Status',
			currencies: (status as any[]) || [],
			rules: (value: any) => ({
				required: true,
			}),
			InputProps: {
				startAdornment: (
					<InputAdornment position='start'>
						<LockIcon />
					</InputAdornment>
				),
			},
		},
	]);

	useLayoutEffect(() => {
		if (Election) {
			let state = FromInput;

			Object.entries(Election).forEach(([key, value]: any) => {
				const i = state.findIndex((form) => form.name === key);

				if (i !== -1) state[i].value = value;
			});

			if (status) state[1].currencies = status as any[];

			setFromInput(state);
		}
	}, [FromInput, Election, status]);

	return (
		<ModalWin open={openEditModal} onClose={EditModal}>
			<h2 className='s-center'>Editar Elección</h2>
			<Loader load={ViewForm}>
				<CreateForm
					{...{
						Action,
						schema,
						fromInput: FromInput,
						buttonText: 'editar',
					}}
				/>
			</Loader>
		</ModalWin>
	);
};

export default EditElection;
