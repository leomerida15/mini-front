/** @format */

import * as yup from 'yup';
import { setLocale } from 'yup';
import { InputAdornment } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { fromInput } from '../createForm/interface';
import axios from 'axios';
import Swal, { AlertError } from '../../hooks/Alert';
import { useNavigate } from 'react-router';
import ModalWin from '../Modal/index';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

setLocale({
	mixed: { required: `Este campo es requerido` },
});

const schema = yup
	.object()
	.shape({
		password: yup.string().required(),
		confirPass: yup.string().required(),
	})
	.required();

const NewPass = () => {
	const Navigate = useNavigate();

	const [Open, setOpen] = useState(false);

	const Action = async (body: any) => {
		try {
			const resp = await axios.post('/auth/users/newPass', body);

			Swal.fire({
				title: resp.data.message,
				icon: 'success',
				text: 'Revise su correo',
				timer: 2000,
			});

			Navigate('/');
		} catch (err) {
			localStorage.clear();
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
				<Tooltip title='Recuperar Contraseña'>
					<LockRoundedIcon />
				</Tooltip>
			</IconButton>
			<ModalWin
				onClose={() => setOpen(!Open)}
				open={Open}
				form={{ buttonText: 'Cambiar Contraseña', Action, schema, fromInput: fromData }}>
				<h2>Nueva Contraseña</h2>
			</ModalWin>
		</>
	);
};

export default NewPass;
