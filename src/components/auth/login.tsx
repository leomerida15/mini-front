/** @format */

import CreateForm from '../createForm';
import * as yup from 'yup';
import { setLocale } from 'yup';
import { InputAdornment } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { fromInput, formAction } from '../createForm/interface';
import axios from '../../hooks/axios';
import { AlertError } from '../../hooks/Alert';
import { useNavigate } from 'react-router';
import { useContextRouter } from '../../router/context/index';
import Loader from '../loader';
import { useState } from 'react';

setLocale({
	mixed: { required: `Este campo es requerido` },
	string: {
		// eslint-disable-next-line no-template-curly-in-string
		min: 'El minimo de caracteres es de ${min}',
		// eslint-disable-next-line no-template-curly-in-string
		max: 'El maximo de caracteres es de ${max}',
		email: 'El correo esta mal formateado',
	},
});

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required(),
});

const Login = () => {
	const { saveAuth } = useContextRouter();
	const Navigate = useNavigate();

	const [ViewForm, setViewForm] = useState(false);

	const Action: formAction = async (body) => {
		try {
			const { password } = body;
			if (password.length < 8 || password.length > 12) {
				throw new Error('La contraseña es incorrecta');
			}

			setViewForm(true);

			axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
			const resp = await axios.post('/auth/login', body);

			const valid_rol = resp.data.info.roles.find((rol: any) => rol.name === 'Admin');

			if (!valid_rol) throw new Error('No tiene permisos para acceder');

			localStorage.setItem('token', resp.data.token);

			setTimeout(() => setViewForm(false), 1000);

			saveAuth.login(resp.data.token);

			Navigate('/dash/users');
		} catch (err) {
			setViewForm(false);
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

	return (
		<Loader load={ViewForm}>
			<CreateForm buttonText='Entrar' Action={Action} schema={schema} fromInput={fromData} />
		</Loader>
	);
};

export default Login;
