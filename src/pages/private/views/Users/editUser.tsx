/** @format */

import { useLayoutEffect, useState } from 'react';
import { FC } from 'react';
import * as yup from 'yup';
import { InputAdornment } from '@mui/material';
import { AccountCircle } from '@material-ui/icons';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { fromInput, formAction } from '../../../../components/createForm/interface';
import Swal from '../../../../hooks/Alert';
import axios from 'axios';
import { useContextUsers } from '.';
import ModalWin from '../../../../components/Modal/index';
import { Api } from '../../../../interfaces';
import Loader from '../../../../components/loader';
import CreateForm from '../../../../components/createForm/indexa';

const schema = yup.object().shape({
	name: yup.string(),
	email: yup.string().email(),
	roles: yup.array().min(1).max(4),
});
// .required();

const EditUser: FC = () => {
	const { reFreshList, openEditModal, EditModal, Rols, User } = useContextUsers();

	const [ViewForm, setViewForm] = useState(false);

	const Action: formAction<Api.User> = async (data) => {
		try {
			setViewForm(true);
			const body = Object.fromEntries(
				Object.entries(data)
					.filter(([key, value]) => value)
					.map(([key, value]) => {
						if (key === 'roles') {
							const item = Rols.filter((rol: any) => data.roles!.includes(rol.name));
							return [key, item];
						}

						return [key, value];
					}),
			);

			const resp = await axios.put('/users/' + User.id, body);

			Swal.fire({ title: 'OK', text: resp.data.message, icon: 'success' });

			setTimeout(() => {
				EditModal();
				setViewForm(false);
			}, 1000);

			reFreshList();
		} catch (err: any) {
			console.error(err);

			Swal.fire({ title: 'Error', text: err, icon: 'error' });
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
			type: 'email',
			name: 'email',
			label: 'Correo',
			rules: (value: any) => {
				return {
					required: false,
				};
			},
			InputProps: {
				startAdornment: (
					<InputAdornment position='start'>
						<EmailIcon />
					</InputAdornment>
				),
			},
		},
		{
			type: 'select-multiple',
			name: 'roles',
			label: 'Roles',
			currencies: (Rols as any[]) || [],
			checkItems: [],
			rules: (value: any) => ({
				required: false,
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
		if (User) {
			let state = FromInput;

			Object.entries(User).forEach(([key, value]) => {
				const i = state.findIndex((form) => form.name === key);

				if (i !== -1 && key !== 'roles') state[i].value = value;

				if (key === 'roles') {
					state[i].checkItems = value.map((rol: any) => rol.name as string);
				}
			});

			setFromInput(state);
		}
	}, [FromInput, User]);

	useLayoutEffect(() => {
		let state = FromInput;
		state[2].currencies = Rols as any[];

		setFromInput(state);
	}, [FromInput, Rols]);

	return (
		<ModalWin open={openEditModal} onClose={EditModal}>
			<h2 className='s-center'>Editar Usuario</h2>
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

export default EditUser;
