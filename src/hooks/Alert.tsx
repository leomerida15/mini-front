import { AxiosError } from 'axios';
import Swal2 from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Api } from '../interfaces';
const Swal = withReactContent(Swal2);

export default Swal;

export const Error = (err: AxiosError | Api.Resp) => {
	Swal.fire();
};
