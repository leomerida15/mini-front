/** @format */

import CreateForm from '../createForm';
import * as yup from 'yup';
import { setLocale } from 'yup';
import { InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { fromInput } from '../createForm/interface';
import axios from 'axios';
import Swal, { AlertError } from '../../hooks/Alert';
import { useNavigate } from 'react-router';

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

	const Action = async (body: any) => {
		try {
			debugger;
			await axios.post('/auth/newPassEmail', body);

			Swal.fire({
				title: 'Se ha enviado un correo',
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

	return <CreateForm buttonText='Enviar' Action={Action} schema={schema} fromInput={fromData} />;
};

export default MailPass;
