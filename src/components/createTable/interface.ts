import { GridColDef } from '@mui/x-data-grid-pro';

export interface TableActions<row = any> {
	edit?: (row: row) => void | Promise<void>;
	remove?: (row: row) => void | Promise<void>;
	print?: (row: row) => void | Promise<void>;
}

export interface CreateTableProps<rows = any[]> {
	rows: rows;
	columns: GridColDef[];
	actions?: TableActions;
}
