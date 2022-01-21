/** @format */

import { createContext, FC, useContext, useReducer } from 'react';

export interface routerContexState {
	auth: boolean;
	saveAuth: any;
}

export const ContextRouter = createContext<routerContexState>({ auth: false, saveAuth: {} });

export const TypesRouter: { [key: string]: string } = {
	AUTH: 'AUTH',
};

export const ReducerRouter = (state: any, { payload, type }: any) => {
	if (type === TypesRouter.AUTH) {
		state.auth = localStorage.getItem('token') ? true : false;
		return state;
	}
};

export const useContextRouter = (): routerContexState => useContext(ContextRouter);

export const ProviderRouter: FC = ({ children }) => {
	const saveAuth = {
		login(token: string) {
			localStorage.setItem('token', token);
			dispatch({ type: TypesRouter.AUTH });
		},

		logout() {
			localStorage.removeItem('token');
			dispatch({ type: TypesRouter.AUTH });
		},
	};
	// const location = useLocation();

	const initState: routerContexState = {
		auth: localStorage.getItem('token') ? true : false,
		saveAuth,
	};

	const [state, dispatch] = useReducer(ReducerRouter, initState);

	return <ContextRouter.Provider value={{ ...state, saveAuth }}>{children}</ContextRouter.Provider>;
};
