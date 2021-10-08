import CreateForm from '../createForm';
import * as yup from 'yup';
import { InputAdornment } from '@mui/material';
import { AccountCircle } from '@material-ui/icons';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { fromInput } from '../createForm/interface';
import axios from 'axios';
import Swal from '../../hooks/Alert';

const schema = yup
	.object({
		name: yup.string().required(),
		email: yup.string().required(),
		password: yup.string().required(),
		confirPass: yup.string().required(),
	})
	.required();

const Register = () => {
	const Action = async (body: any) => {
		try {
			const { password, confirPass } = body;

			if (password !== confirPass) {
				// eslint-disable-next-line no-throw-literal
				throw {
					title: 'Error',
					text: 'Sus contraseñas no son inguales',
					icon: 'error',
				};
			}

			await axios.post('/auth/register', body);
		} catch (err: any) {
			Swal.fire(err);
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
	];

	return <CreateForm buttonText='crear' Action={Action} schema={schema} fromInput={fromData} />;
};

export default Register;
