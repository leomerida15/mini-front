import { GridColDef } from '@mui/x-data-grid-pro';

export interface actions {
	edit: (col: any) => void | Promise<void>;
	remove: (col: any) => void | Promise<void>;
	print?: (col: any) => void | Promise<void>;
}

export interface CreateTableProps<rows = any[]> {
	rows: rows;
	columns: GridColDef[];
	actions?: actions;
}
