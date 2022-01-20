/** @format */

import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Login from './login';
import Register from './register';
import MailPass from './MailPass';

const Auth: FC<{ type: string }> = ({ type }) => {
	if (type === 'login') return <Login />;
	if (type === 'MailPass') return <MailPass />;
	else return <Register />;
};

Auth.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Auth;
