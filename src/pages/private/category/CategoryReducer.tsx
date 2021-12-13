import { GET_USERS, GET_PROFILE } from './types';

const CategoryReducer = (state: any, action: any): any => {
	const { payload, type } = action;

	switch (type) {
		case GET_USERS:
			return {
				...state,
				categorys: payload,
			};
		case GET_PROFILE:
			return {
				...state,
				selectedCategorys: payload,
			};
		case 'defineInputs':
			return Object.assign(state, { inputs: payload } as any);
		default:
			return state;
	}
};

export default CategoryReducer;
