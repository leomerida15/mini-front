/** @format */

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import { DataGridPro, GridColDef, GridRenderCellParams, esES, GridLocaleText } from '@mui/x-data-grid-pro';
import { FC, useLayoutEffect, useState } from 'react';
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

const localeText = (): Partial<GridLocaleText> | undefined => {
	//
	const { components }: any = esES;
	if (!components) return undefined;

	const { MuiDataGrid } = components;
	if (!MuiDataGrid) return undefined;

	const { defaultProps } = MuiDataGrid;
	if (!defaultProps) return undefined;

	const { localeText } = defaultProps;
	if (!localeText) return undefined;

	return localeText as Partial<GridLocaleText>;
};

const CreateTable: FC<CreateTableProps> = ({ rows, columns, actions }) => {
	//
	const ColumsCreate = (columns: GridColDef[], actions?: TableActions) => {
		if (!actions) return columns;

		const colsAdd = columnsActions(actions);

		return columns.concat(colsAdd);
	};

	const [RowsData, setRowsData] = useState<any[]>([]);

	useLayoutEffect(() => {
		const DataTable = rows.map((row: any) => {
			//
			const resp = Object.entries(row).map(([key, item]): [string, unknown] => {
				const value: any = item;

				//
				if (typeof value !== 'object') return [key, value];

				if (!Array.isArray(value)) return [key, value.name];

				const items = value.map((item: any) => item.name).join(', ');

				return [key, items];
			});

			return Object.fromEntries(resp);
		});

		setRowsData(DataTable);
	}, [rows]);

	return (
		<div style={{ height: 300, width: '100%' }}>
			<DataGridPro localeText={localeText()} rows={RowsData} columns={ColumsCreate(columns, actions)} />
		</div>
	);
};

CreateTable.propTypes = {
	rows: PropTypes.array.isRequired,
	columns: PropTypes.array.isRequired,
	actions: PropTypes.any,
};

export default CreateTable;
