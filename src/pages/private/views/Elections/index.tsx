/** @format */

import { createContext, useContext, useLayoutEffect, useReducer, useState } from 'react';
import CreateElections from './createElection';
import EditElections from './editElection';
import ListElections from './listElections';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { Resp, Rols } from '../../../../interfaces/Api';
import useAxios from 'axios-hooks';

export interface TypeElectionContext {
	NewElection: number;
	openCreateModal: boolean;
	openEditModal: boolean;
	ElectionData: any;
	reFreshList: () => void;
	CreateModal: () => void;
	EditModal: () => void;
	defineElection: (election: any) => void;
	status: Rols[];
	Election: any;
}

export const InitDataElection: TypeElectionContext = {
	NewElection: 0,
	openCreateModal: false,
	openEditModal: false,
	ElectionData: {},
	reFreshList: () => {},
	CreateModal: () => {},
	EditModal: () => {},
	defineElection: () => {},
	status: [],
	Election: {} as any,
};

export const ElectionContext = createContext<TypeElectionContext>(InitDataElection);

export const useContextElection = () => useContext(ElectionContext);

export const TypesElection = { ReFreshList: 'ReFreshList', Status: 'Status', Election: 'Election' };

export const ReducerElection = (state: any, { payload, type }: any) => {
	//
	if (type === TypesElection.ReFreshList) {
		state.NewElection = state.NewElection + 1;

		return state;
	}
	//
	if (type === TypesElection.Status) {
		state.status = payload;

		return state;
	}
	//
	if (type === TypesElection.Election) {
		state.Election = payload;

		return state;
	}
};

const Elections = () => {
	const [{ data }, refetch] = useAxios<Resp<Rols[]>>('/elections/status');

	const [state, dispatch] = useReducer(ReducerElection, InitDataElection);

	const [RefreshView, setRefreshView] = useState(0);

	const [openEditModal, setopenEditModal] = useState(false);
	const EditModal = () => setopenEditModal(!openEditModal);

	const [openCreateModal, setopenCreateModal] = useState(false);
	const CreateModal = () => setopenCreateModal(!openCreateModal);

	const reFreshList = () => {
		dispatch({ type: TypesElection.ReFreshList });

		setRefreshView(RefreshView + 1);
	};

	const defineElection = (election: any) => {
		dispatch({ type: TypesElection.Election, payload: election });
	};

	useLayoutEffect(() => {
		if (data) {
			dispatch({ type: TypesElection.Status, payload: data.info! });
			setRefreshView(RefreshView + 1);
		} else {
			refetch();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<ElectionContext.Provider
			value={{
				...state,
				openCreateModal,
				reFreshList,
				CreateModal,
				defineElection,
				EditModal,
				openEditModal,
			}}>
			<div className='ed-container s-py-5'>
				<div className='ed-item'>
					<h2>Lista de Elecciones</h2>
					<ListElections />
				</div>
				<CreateElections />
				<EditElections />
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
		</ElectionContext.Provider>
	);
};

export default Elections;
