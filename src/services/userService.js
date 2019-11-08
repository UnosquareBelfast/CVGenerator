import { usersEndpoint } from './config';

export const fetchUsers = () => fetch(usersEndpoint).then(resp => resp.json());

export default fetchUsers;
