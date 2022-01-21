/** @format */

import { createContext, useContext, useReducer, useState, useLayoutEffect } from 'react';
import CreateUser from './createUser';
import EditUser from './editUser';
import ListUsers from './listUsers';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import useAxios from 'axios-hooks';
import { Resp, Rols, User } from '../../../../interfaces/Api';

export interface TypeUsersContext {
	NewUser: number;
	openCreateModal: boolean;
	openEditModal: boolean;
	UserData: any;
	reFreshList: () => void;
	CreateModal: () => void;
	EditModal: () => void;
	defineUser: (user: User) => void;
	Rols: Rols[];
	User: User;
}

export const InitDataUsers: TypeUsersContext = {
	NewUser: 0,
	openCreateModal: false,
	openEditModal: false,
	UserData: {},
	reFreshList: () => {},
	CreateModal: () => {},
	EditModal: () => {},
	defineUser: () => {},
	Rols: [],
	User: {} as any,
};

export const UsersContext = createContext<TypeUsersContext>(InitDataUsers);

export const useContextUsers = () => useContext(UsersContext);

export const TypesUsers = { ReFreshList: 'ReFreshList', Roles: 'Roles', User: 'User' };

export const ReducerUsers = (state: any, { payload, type }: any) => {
	//
	if (type === TypesUsers.ReFreshList) {
		state.NewUser = state.NewUser + 1;

		return state;
	}
	//
	if (type === TypesUsers.Roles) {
		state.Rols = payload;

		return state;
	}
	//
	if (type === TypesUsers.User) {
		state.User = payload;

		return state;
	}
};

const Users = () => {
	const [{ data }] = useAxios<Resp<Rols[]>>('/roles');

	const [state, dispatch] = useReducer(ReducerUsers, InitDataUsers);

	const [RefreshView, setRefreshView] = useState(0);

	const [openEditModal, setopenEditModal] = useState(false);
	const EditModal = () => setopenEditModal(!openEditModal);

	const [openCreateModal, setopenCreateModal] = useState(false);
	const CreateModal = () => setopenCreateModal(!openCreateModal);

	const reFreshList = () => {
		dispatch({ type: TypesUsers.ReFreshList });

		setRefreshView(RefreshView + 1);
	};

	const defineUser = (user: User) => {
		dispatch({ type: TypesUsers.User, payload: user });
	};

	useLayoutEffect(() => {
		if (data) {
			dispatch({ type: TypesUsers.Roles, payload: data.info! });
			setRefreshView(RefreshView + 1);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<UsersContext.Provider
			value={{
				...state,
				openCreateModal,
				reFreshList,
				CreateModal,
				defineUser,
				EditModal,
				openEditModal,
			}}>
			<div className='ed-container s-py-5'>
				<div className='ed-item'>
					<h2>Lista de usuarios</h2>
					<ListUsers />
				</div>
				<CreateUser />
				<EditUser />
			</div>
			<Box
				sx={{
					position: 'fixed',
					width: 60,
					height: 60,
					bottom: 40,
					right: 40,
				}}>
				<Fab onClick={CreateModal} color='primary' aria-label='add'>
					<AddIcon />
				</Fab>
			</Box>
		</UsersContext.Provider>
	);
};

export default Users;
