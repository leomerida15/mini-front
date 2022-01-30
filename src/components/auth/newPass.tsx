/** @format */

import * as yup from 'yup';
import { setLocale } from 'yup';
import { InputAdornment } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { fromInput, formAction } from '../createForm/interface';
import axios from '../../hooks/axios';
import Swal, { AlertError } from '../../hooks/Alert';
import ModalWin from '../Modal/index';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import Loader from '../loader';
import CreateForm from '../createForm/indexa';

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

const schema = yup
	.object()
	.shape({
		password: yup.string().min(8).max(12).required(),
		confirPass: yup.string().min(8).max(12).required(),
	})
	.required();

const NewPass = () => {
	const [Open, setOpen] = useState(false);

	const [ViewForm, setViewForm] = useState(false);

	const Action: formAction = async (body) => {
		try {
			setViewForm(true);

			axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
			const resp = await axios.post('/auth/users/newPass', body);

			Swal.fire({
				title: resp.data.message,
				icon: 'success',
			});

			setTimeout(() => {
				setViewForm(false);
				setOpen(!Open);
			}, 1000);
		} catch (err) {
			setViewForm(false);
			AlertError(err);
		}
	};

	const fromData: fromInput[] = [
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
	];

	return (
		<>
			<IconButton
				size='large'
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={() => setOpen(!Open)}
				color='inherit'>
				<Tooltip title='Cambiar Contraseña'>
					<LockRoundedIcon />
				</Tooltip>
			</IconButton>
			<ModalWin onClose={() => setOpen(!Open)} open={Open}>
				<h2>Nueva Contraseña</h2>
				<Loader load={ViewForm}>
					<CreateForm buttonText='Cambiar Contraseña' Action={Action} schema={schema} fromInput={fromData} />
				</Loader>
			</ModalWin>
		</>
	);
};

export default NewPass;
