import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import { DataGridPro, GridColDef, GridRenderCellParams } from '@mui/x-data-grid-pro';
import { FC } from 'react';
import Fab from '@mui/material/Fab';

import PropTypes from 'prop-types';
import { CreateTableProps, actions } from './interface';

const columnsActions = (actions: actions): GridColDef => {
	const { remove, print, edit } = actions;
	const renderCell = (params: GridRenderCellParams) => {
		const { api } = params;
		if (!actions.print) {
			return (
				<strong>
					<Fab size='small' onClick={() => edit(params)} color='primary'>
						<EditIcon />
					</Fab>
					<Fab size='small' onClick={() => remove(params)} color='secondary'>
						<DeleteIcon />
					</Fab>
				</strong>
			);
		} else {
			return (
				<strong>
					<Fab
						size='small'
						onClick={() => {
							// @ts-expect-error
							print(api);
						}}
						color='inherit'>
						<PrintIcon />
					</Fab>
					<Fab size='small' onClick={() => edit(api)} color='primary'>
						<EditIcon />
					</Fab>
					<Fab size='small' onClick={() => remove(api)} color='secondary'>
						<DeleteIcon />
					</Fab>
				</strong>
			);
		}
	};
	return {
		field: 'actions',
		headerName: 'Acciones',
		width: 150,
		renderCell,
	};
};

const CreateTable: FC<CreateTableProps> = ({ rows, columns, actions }) => {
	//
	const ColumsCreate = (columns: GridColDef[], actions?: actions) => {
		if (!actions) return columns;

		const colsAdd = columnsActions(actions);

		return columns.concat(colsAdd);
	};

	return (
		<div style={{ height: 300, width: '100%' }}>
			<DataGridPro rows={rows} columns={ColumsCreate(columns, actions)} />
		</div>
	);
};

CreateTable.propTypes = {
	rows: PropTypes.array.isRequired,
	columns: PropTypes.array.isRequired,
	actions: PropTypes.any,
};

export default CreateTable;
