/** @format */

import { AxiosError } from 'axios';
import Swal2, { SweetAlertOptions } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Api } from '../interfaces';
const Swal = withReactContent(Swal2);

export default Swal;

export const AlertError = (err: AxiosError<Api.Resp> | any | Error, config?: SweetAlertOptions) => {
	const { response } = err;
	const text = response ? response.data.message : err.message ? err.message : '';

	if (!config) Swal.fire({ title: 'Error', text, icon: 'error' });
	//
	else Swal.fire({ text, ...config });
};
