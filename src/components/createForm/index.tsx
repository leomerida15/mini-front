/** @format */

import PropTypes from 'prop-types';
import { FC } from 'react';

import CreateFormStatic from './static';

export * from './interface';

const CreateForm: FC<any> = (props) => {
	return <CreateFormStatic {...props} />;
};

CreateForm.propTypes = {
	Action: PropTypes.func.isRequired,
	schema: PropTypes.any.isRequired,
	fromInput: PropTypes.array,
	context: PropTypes.any,
	sx: PropTypes.any,
	buttonText: PropTypes.string,
	conten: PropTypes.string,
	ButtonClass: PropTypes.string,
};

export default CreateForm;
