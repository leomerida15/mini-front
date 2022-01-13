/** @format */

import CreateForm from '../createForm';
import * as yup from 'yup';
import { InputAdornment } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { fromInput } from '../createForm/interface';
import axios from 'axios';
import Swal from '../../hooks/Alert';
import { useHistory } from 'react-router';

const schema = yup
	.object({
		email: yup.string().required(),
		password: yup.string().required(),
	})
	.required();

const Login = () => {
	const History = useHistory();
	const Action = async (body: any) => {
		try {
			console.log('body Form', body);

			const resp = await axios.post('/auth/login', body);

			const valid_rol = resp.data.info.roles.find((rol: any) => rol.name === 'Admin');

			if (!valid_rol) throw new Error('No tiene permisos para acceder');

			History.push('/dash');
		} catch (err) {
			localStorage.removeItem('token');
			if (err === 'Error: No tiene permisos para acceder') {
				Swal.fire({
					title: err as any,
					icon: 'error',
					showConfirmButton: false,
					timer: 1500,
				});
			}
		}
	};

	const fromData: fromInput[] = [
		{
			type: 'text',
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
			type: 'password',
			name: 'password',
			label: 'Contraseña',
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

	return <CreateForm buttonText='crear' Action={Action} schema={schema} fromInput={fromData} />;
};

export default Login;
