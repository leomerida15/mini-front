import { Api } from '../../interfaces';
import Privates from './privates';
import Publics from './publics';

const Routes: Api.Route[] = [...Publics, ...Privates];

export default Routes;
