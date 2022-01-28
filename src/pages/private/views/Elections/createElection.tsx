/** @format */

import * as yup from 'yup';
import { InputAdornment } from '@mui/material';
import { AccountCircle } from '@material-ui/icons';
import { fromInput, formAction, createFormProps } from '../../../../components/createForm/interface';
import Swal, { AlertError } from '../../../../hooks/Alert';
import axios from '../../../../hooks/axios';
import PropTypes from 'prop-types';
import { FC, useState } from 'react';
import ModalWin from '../../../../components/Modal/index';
import { Api } from '../../../../interfaces';
import { useContextElection } from './index';
import Loader from '../../../../components/loader';
import CreateForm from '../../../../components/createForm/indexa';

interface AxiosElection extends Api.Resp<{ message: string }> {}

const schema = yup
	.object({
		name: yup.string().required(),
	})
	.required();

const CreateUser: FC = () => {
	const { reFreshList, openCreateModal, CreateModal } = useContextElection();

	const [ViewForm, setViewForm] = useState(false);

	const Action: formAction<any> = async (body) => {
		try {
			setViewForm(true);

			await axios.post<AxiosElection>('/elections', body);

			Swal.fire({ title: 'OK', text: 'Elección Creada', icon: 'success' });

			setTimeout(() => setViewForm(false), 1000);

			reFreshList();
		} catch (err: any) {
			setViewForm(false);
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
		// {
		// 	type: 'time-date',
		// 	name: 'reviewAt',
		// 	label: 'Fecha de revisión',
		// 	rules: (value: any) => {
		// 		return {
		// 			required: true,
		// 		};
		// 	},
		// 	timeConfig: {
		// 		inputFormat: 'dd-MM-yyyy',
		// 		typeTime: 'Mobile',
		// 	},
		// },
		// {
		// 	type: 'time-date',
		// 	name: 'voteingAt',
		// 	label: 'Fecha de Votacion',
		// 	rules: (value: any) => {
		// 		return {
		// 			required: true,
		// 		};
		// 	},
		// 	timeConfig: {
		// 		inputFormat: 'dd-MM-yyyy',
		// 		typeTime: 'Mobile',
		// 	},
		// },
		// {
		// 	type: 'time-date',
		// 	name: 'finishAt',
		// 	label: 'Fecha de Cierre',
		// 	rules: (value: any) => {
		// 		return {
		// 			required: true,
		// 		};
		// 	},
		// 	timeConfig: {
		// 		inputFormat: 'dd-MM-yyyy',
		// 		typeTime: 'Mobile',
		// 	},
		// },
	];

	const form: createFormProps = { Action, schema, fromInput: fromData, buttonText: 'Crear' };

	return (
		<ModalWin open={openCreateModal} onClose={CreateModal}>
			<h2 className='s-center'>Crear Elección</h2>
			<Loader load={ViewForm}>
				<CreateForm {...form} />
			</Loader>
		</ModalWin>
	);
};

CreateUser.propTypes = {
	reFreshList: PropTypes.func.isRequired,
};

export default CreateUser;
