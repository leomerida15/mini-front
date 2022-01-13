/** @format */

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import { DataGridPro, GridColDef, GridRenderCellParams } from '@mui/x-data-grid-pro';
import { FC } from 'react';
import Fab from '@mui/material/Fab';

import PropTypes from 'prop-types';
import { CreateTableProps, TableActions } from './interface';

const columnsActions = (actions: TableActions): GridColDef => {
	const { remove, print, edit } = actions;
	const renderCell = (params: GridRenderCellParams) => {
		const { row } = params;

		return (
			<strong>
				{print ? (
					<Fab size='small' onClick={() => print(row)} color='inherit'>
						<PrintIcon />
					</Fab>
				) : (
					''
				)}
				{edit ? (
					<Fab size='small' onClick={() => edit(row)} color='primary'>
						<EditIcon />
					</Fab>
				) : (
					''
				)}
				{remove ? (
					<Fab size='small' onClick={() => remove(row)} color='secondary'>
						<DeleteIcon />
					</Fab>
				) : (
					''
				)}
			</strong>
		);
		// }
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
	const ColumsCreate = (columns: GridColDef[], actions?: TableActions) => {
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
