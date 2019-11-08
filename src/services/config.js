const hostname = 'http://localhost:8081/api';
const endpoints = {
  users: `/users`,
};
export const usersEndpoint = `${hostname}${endpoints.users}`;

export default usersEndpoint;
