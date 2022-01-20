/** @format */

import CreateForm from '../createForm';
import * as yup from 'yup';
import { setLocale } from 'yup';
import { InputAdornment } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { fromInput } from '../createForm/interface';
import axios from 'axios';
import { AlertError } from '../../hooks/Alert';
import { useNavigate } from 'react-router';
import { useContextRouter } from '../../router/context/index';

setLocale({
	mixed: { required: `Este campo es requerido` },
	string: { min: 'El minimo de caracteres es de ${min}', max: 'El maximo de caracteres es de ${max}' },
});

const schema = yup
	.object()
	.shape({
		email: yup.string().email().required(),
		password: yup.string().min(8).max(12).required(),
	})
	.required();

const Login = () => {
	const { saveAuth } = useContextRouter();
	const Navigate = useNavigate();

	const Action = async (body: any) => {
		try {
			const resp = await axios.post('/auth/login', body);

			const valid_rol = resp.data.info.roles.find((rol: any) => rol.name === 'Admin');

			if (!valid_rol) throw new Error('No tiene permisos para acceder');

			saveAuth.login(resp.data.token);

			Navigate('/dash/users');
		} catch (err) {
			localStorage.clear();
			AlertError(err);
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

	return <CreateForm buttonText='Entrar' Action={Action} schema={schema} fromInput={fromData} />;
};

export default Login;
