/** @format */

import { useState } from 'react';
import CreateUser from '../../../components/Users/createUser';
import ListUsers from '../../../components/Users/listUsers';
const Users = () => {
	const [NewUser, setNewUser] = useState<number>(0);

	const reFreshList = () => {
		setNewUser(NewUser + 1);
	};

	return (
		<div className='ed-container'>
			<div className='ed-item s-center'>
				<h1>Lista de Usuarios</h1>
			</div>
			<div className='ed-item m-50'>
				<CreateUser reFreshList={reFreshList} />
			</div>
			<div className='ed-item m-50'>
				<ListUsers NewUser={NewUser} />
			</div>
		</div>
	);
};

export default Users;
