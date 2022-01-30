/** @format */

import CreateForm from '../createForm';
import * as yup from 'yup';
import { setLocale } from 'yup';
import { InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { fromInput } from '../createForm/interface';
import axios from '../../hooks/axios';
import Swal, { AlertError } from '../../hooks/Alert';
import { useNavigate } from 'react-router';
import Loader from '../loader';
import { useState } from 'react';

setLocale({
	mixed: { required: `Este campo es requerido` },
});

const schema = yup
	.object()
	.shape({
		email: yup.string().email().required(),
	})
	.required();

const MailPass = () => {
	const Navigate = useNavigate();

	const [ViewForm, setViewForm] = useState(false);

	const Action = async (body: any) => {
		try {
			setViewForm(true);

			await axios.post('/auth/newPassEmail', body);

			Swal.fire({
				title: 'Revise su correo',
				icon: 'success',
			});

			setTimeout(() => {
				setViewForm(false);
				Navigate('/');
			}, 1000);
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
	];

	return (
		<Loader load={ViewForm}>
			<CreateForm buttonText='Enviar' Action={Action} schema={schema} fromInput={fromData} />
		</Loader>
	);
};

export default MailPass;
