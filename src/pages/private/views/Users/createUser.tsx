/** @format */

import * as yup from 'yup';
import { InputAdornment } from '@mui/material';
import { AccountCircle } from '@material-ui/icons';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { fromInput, formAction } from '../../../../components/createForm/interface';
import Swal from '../../../../hooks/Alert';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FC, useState, MouseEvent } from 'react';
import { useContextUsers } from '.';
import ModalWin from '../../../../components/Modal/index';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import CreateForm from '../../../../components/createForm/index';
import Button from '@mui/material/Button';
import { AlertError } from '../../../../hooks/Alert';

const schema = yup
	.object({
		name: yup.string().required(),
		email: yup.string().email().required(),
		password: yup.string().required(),
		confirPass: yup.string().required(),
		roles: yup.array().min(1).max(4).required(),
	})
	.required();

const CreateUser: FC = () => {
	const onSubmit = async (e: any) => {
		try {
			e.preventDefault();
			const body = new FormData();
			body.append('images', e.target[0].files[0]);

			const resp = await axios.post('/auth/register/big', body);

			Swal.fire({ title: 'OK', text: resp.data.message, icon: 'success' });
		} catch (err) {
			AlertError(err);
		}
	};

	const { reFreshList, openCreateModal, CreateModal, Rols } = useContextUsers();

	const [alignment, setAlignment] = useState<string | null>('one');

	const handleAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
		setAlignment(newAlignment);
	};

	const Action: formAction<{
		name: string;
		password: string;
		confirPass: string;
		roles: any[];
	}> = async (body, reset): Promise<void> => {
		try {
			const { password, confirPass } = body;

			if (password !== confirPass) throw new Error('Sus contraseñas no son inguales');

			body.roles = Rols.filter((rol) => body.roles.includes(rol.name));

			const resp = await axios.post('/auth/register', body);

			Swal.fire({ title: 'OK', text: resp.data.message, icon: 'success' });

			reset();
			reFreshList();
		} catch (err: any) {
			console.error(err);
			AlertError(err);
		}
	};

	const fromData: fromInput[] = [
		{
			type: 'text',
			name: 'name',
			label: 'Nombre',
			autoFocus: true,
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
			currencies: (Rols as any[]) || [],
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
		<ModalWin open={openCreateModal} onClose={CreateModal}>
			<div className='s-px-1 ed-container'>
				<h2 className='s-to-left'>{alignment === 'one' ? 'Crear Usuario' : 'carga masiva de usuarios'}</h2>
				<div className='s-to-right'>
					<ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label='text alignment'>
						<ToggleButton value='one' aria-label='left aligned'>
							<Tooltip title='Formulario' placement='top-start'>
								<ArticleSharpIcon />
							</Tooltip>
						</ToggleButton>
						<ToggleButton value='big' aria-label='right'>
							<Tooltip title='Carga Masiva' placement='top-end'>
								<AccountCircleSharpIcon />
							</Tooltip>
						</ToggleButton>
					</ToggleButtonGroup>
				</div>
			</div>
			{alignment === 'one' ? (
				<CreateForm {...{ Action, schema, fromInput: fromData }} />
			) : (
				<div className='ed-item s-pt-3'>
					<form className={'ed-grid m-grid-2'} onSubmit={onSubmit}>
						<Button variant='contained'>
							<ArticleSharpIcon /> Archivo
							<input type='file' name='picture' hidden />
						</Button>
						<Button type={'submit'} variant='contained'>
							Enviar <input type='file' name='picture' hidden />
						</Button>
					</form>

					<Button
						href='./img/big-test.xlsx'
						download='planilla_carga_masiva-usuarios'
						className={'ed-item'}
						type={'submit'}
						variant='contained'>
						Planilla de Carga masiva
					</Button>
				</div>
			)}
		</ModalWin>
	);
};

CreateUser.propTypes = {
	reFreshList: PropTypes.func.isRequired,
};

export default CreateUser;
