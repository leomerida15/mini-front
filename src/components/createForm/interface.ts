import { Context } from 'react';

export interface currencie {
	value: string | number;
	label: string;
}

export interface fromInput {
	name: string;
	label: string;
	type: string;
	rules: any;
	value?: string | number;
	render?: any;
	currencies?: currencie[];
	InputProps?: any;
}

export interface pInput {
	field: { onChange: any; value: any };
}
export interface createFormPropsContext {
	Action: any;
	schema: any;
	sx?: any;
	context: Context<any>;
	conten?: string;
	buttonText?: string;
	ButtonClass?: string;
}

export interface createFormPropsStatic {
	fromInput: fromInput[];
	Action: any;
	schema: any;
	sx?: any;
	conten?: string;
	buttonText?: string;
	ButtonClass?: string;
}

export interface createFormProps {
	fromInput?: fromInput[];
	Action: any;
	schema: any;
	sx?: any;
	context?: Context<any>;
	conten?: string;
	buttonText?: string;
	ButtonClass?: string;
}

export type InputsGenerate = (pInput: pInput) => JSX.Element;
