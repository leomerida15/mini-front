/** @format */

import CreateForm from '../createForm';
import * as yup from 'yup';
import { Card, InputAdornment } from '@mui/material';
import { AccountCircle } from '@material-ui/icons';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { fromInput, formAction } from '../createForm/interface';
import Swal from '../../hooks/Alert';
import { Resp, Rols } from '../../interfaces/Api';
import useAxios from 'axios-hooks';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FC } from 'react';

const schema = yup
	.object({
		name: yup.string().required(),
		email: yup.string().email().required(),
		password: yup.string().required(),
		confirPass: yup.string().required(),
		roles: yup.array().min(1).max(4).required(),
	})
	.required();

const CreateUser: FC<{ reFreshList: () => void }> = ({ reFreshList }) => {
	const [{ data }] = useAxios<Resp<Rols[]>>('/roles');

	const Action: formAction<{
		name: string;
		password: string;
		confirPass: string;
		roles: any[];
	}> = async (body, reset) => {
		try {
			const Rols = data!.info!;

			const { password, confirPass } = body;

			if (password !== confirPass) throw new Error('Sus contraseñas no son inguales');

			body.roles = Rols.filter((rol) => body.roles.includes(rol.name));

			const resp = await axios.post('/auth/register', body);

			Swal.fire({ title: 'OK', text: resp.data.message, icon: 'success' });

			reset();
		} catch (err: any) {
			console.warn(err);

			Swal.fire({ title: 'Error', text: err, icon: 'error' });
		}
	};

	const fromData: fromInput[] = [
		{
			type: 'text',
			name: 'name',
			label: 'Nombre',
			rules: (value: any) => {
				return {
					required: true,
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
					required: true,
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
			type: 'password-see',
			name: 'password',
			label: 'Contraseña',
			rules: (value: any) => ({
				required: true,
			}),
		},
		{
			type: 'password',
			name: 'confirPass',
			label: 'Repetir Contraseña',
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
		{
			type: 'select-multiple',
			name: 'roles',
			label: 'Roles',
			currencies: data ? (data.info as any[]) : [],
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
	];

	return (
		<Card variant='outlined'>
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
			<CreateForm buttonText='crear' Action={Action} schema={schema} fromInput={fromData} />
		</Card>
	);
};

CreateUser.propTypes = {
	reFreshList: PropTypes.func.isRequired,
};

export default CreateUser;
