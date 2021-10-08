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

			await axios.post('/auth/Login', body);

			History.push('/dash');
		} catch (err: any) {
			Swal.fire(err);
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
