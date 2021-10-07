export interface currencie {
	value: string | number;
	label: string;
}

export interface fromInput {
	name: string;
	label: string;
	type: string;
	rules: any;
	render?: any;
	currencies?: currencie[];
	InputProps?: any;
}

export interface pInput {
	field: { onChange: any; value: any };
}