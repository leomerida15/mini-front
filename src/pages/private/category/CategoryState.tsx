/** @format */

import { useReducer } from 'react';

import CategoryContex from './CategoryContex';
import CategoryReducer from './CategoryReducer';

import { GET_USERS } from './types';
import { fromInput } from '../../../components/createForm/interface';

const CategoryState = (props: any) => {
	const initialState = {
		categorys: [{ hola: 'hola' }],
		selectedCategorys: null,
		inputs: [
			[
				{
					type: 'text',
					name: 'name',
					label: 'Nueva categoria',
					rules: (value: any) => ({
						required: true,
					}),
				},
			],
		],
	};

	const [state, dispatch] = useReducer(CategoryReducer, initialState);

	const getHola = () => {
		dispatch({
			type: GET_USERS,
			payload: [...state.categorys, { hola: 'hola' }],
		});
	};

	const defineInputs = (payload: fromInput[]) => dispatch({ type: 'defineInputs', payload });

	return (
		<CategoryContex.Provider
			value={{
				...state,
				getHola,
				defineInputs,
			}}>
			{props.children}
		</CategoryContex.Provider>
	);
};

export default CategoryState;
