import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import CreateTable from '../../../components/createTable';
import Modal from '../../../components/Modal';
import { useLocation, useHistory, useParams } from 'react-router';
import { fromInput } from '../../../components/createForm/interface';
import axios from 'axios';
import CreateForm from '../../../components/createForm';
import * as yup from 'yup';
import { InputAdornment } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import { GridColDef } from '@mui/x-data-grid-pro';
import { actions } from '../../../components/createTable/interface';

const schema = yup
	.object({
		name: yup.string().required(),
	})
	.required();

const Products = () => {
	const { id } = useParams<{ id: string }>();

	const { pathname } = useLocation();

	const openCreate: boolean = pathname === '/category/create';
	const openEdit: boolean = pathname === '/category/edit/' + id;

	const History = useHistory();

	const Action = async (body: any) => {
		try {
			console.log('body Form', body);

			await axios.post('/category', body);

			History.push('/category');
		} catch (err: any) {
			console.clear();
			console.error(err);
		}
	};

	const fromDataCreate: fromInput[] = [
		{
			type: 'text',
			name: 'name',
			label: 'Nueva categoria',
			rules: (value: any) => ({
				required: true,
			}),
			InputProps: {
				startAdornment: (
					<InputAdornment position='start'>
						<CategoryIcon />
					</InputAdornment>
				),
			},
		},
	];

	let fromDataEdit: fromInput[] = [
		{
			type: 'text',
			name: 'name',
			label: 'Editar categoria',
			rules: (value: any) => {
				alert('value ' + value);
				return { required: true };
			},
			InputProps: {
				startAdornment: (
					<InputAdornment position='start'>
						<CategoryIcon />
					</InputAdornment>
				),
			},
		},
	];

	const rows = [
		{
			id: 1,
			name: new Date(1979, 0, 1).toUTCString(),
		},
		{
			id: 2,
			name: new Date(1984, 1, 1).toUTCString(),
		},
		{
			id: 3,
			name: new Date(1992, 2, 1).toUTCString(),
		},
	];

	const columns: GridColDef[] = [
		{
			field: 'id',
			headerName: 'ID',
			width: 100,
			sortable: true,
		},
		{
			field: 'name',
			headerName: 'name',
			width: 100,
			sortable: true,
		},
	];

	const ActionEdit = async (body: any) => {
		try {
			await axios.put('/category/' + id, body);

			History.push('/category');
		} catch (err: any) {
			console.clear();
			console.error(err);
		}
	};

	const actions: actions = {
		edit(api) {
			fromDataEdit.forEach((Data, i: number, a: any[]) => {
				const { name }: any = Data;
				fromDataEdit[i].value = api.row[name] ?? '';
			});

			console.log('fromDataEdit', fromDataEdit);
			History.push('/category/edit/' + api.id);
		},
		remove(api) {
			console.log('api', api);
		},
	};

	return (
		<div>
			<CreateTable rows={rows} columns={columns} actions={actions} />

			<Box sx={{ '& > :not(style)': { m: 1 } }}>
				<Fab
					onClick={() => History.push('/category/create')}
					size='medium'
					color='primary'
					className={'fab'}
					aria-label='add'>
					<AddIcon />
				</Fab>
			</Box>

			<Modal open={openCreate} onClose={() => History.push('/category')}>
				<CreateForm buttonText='crear' Action={Action} schema={schema} fromInput={fromDataCreate} />
			</Modal>

			<Modal open={openEdit} onClose={() => History.push('/category')}>
				<CreateForm buttonText='editar' Action={ActionEdit} schema={schema} fromInput={fromDataEdit} />
			</Modal>
		</div>
	);
};

export default Products;
