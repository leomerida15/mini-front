import { Context } from 'react';

export interface currencie {
	value: string | number;
	name: string;
}

export interface formAction<data = any> { (data: data): void | any | Promise<void | any> }

export interface fromInput {
	name: string;
	label: string;
	type: 'time-date' | 'text' | 'password' | 'password-see' | 'select' | 'email' | 'select-multiple' | 'file';
	autoFocus?: boolean;
	checkItems?: string[];
	rules: any;
	value?: string | number;
	render?: any;
	timeConfig?: {
		inputFormat?: string;
		typeTime?: | 'Desktop' | 'Mobile' | 'Time' | 'Date';
	};
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
	Action: formAction;
	schema: any;
	sx?: any;
	conten?: string;
	buttonText?: string;
	ButtonClass?: string;
}

export interface createFormProps {
	fromInput: fromInput[];
	Action: formAction;
	schema: any;
	sx?: any;
	context?: Context<any>;
	conten?: string;
	buttonText?: string;
	ButtonClass?: string;
}

export interface ModalWinProps {
	open: boolean;
	onClose?: ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void) | undefined;
	children?: JSX.Element | JSX.Element[];
	form?: createFormProps;
}

export type InputsGenerate = (pInput: pInput) => JSX.Element;
