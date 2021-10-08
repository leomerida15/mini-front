import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TableCategory from '../../../components/TableCategory';
import Modal from '../../../components/Modal';
import { useLocation, useHistory } from 'react-router';
import { fromInput } from '../../../components/createForm/interface';
import axios from 'axios';
import CreateForm from '../../../components/createForm';
import * as yup from 'yup';
import { InputAdornment } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';

const schema = yup
	.object({
		name: yup.string().required(),
	})
	.required();

const Products = () => {
	const open: boolean = useLocation().pathname === '/category/create' ? true : false;
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

	const fromData: fromInput[] = [
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

	return (
		<div>
			<TableCategory />
			<Modal open={open} onClose={() => History.push('/category')}>
				<CreateForm buttonText='crear' Action={Action} schema={schema} fromInput={fromData} />
			</Modal>

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
		</div>
	);
};

export default Products;
