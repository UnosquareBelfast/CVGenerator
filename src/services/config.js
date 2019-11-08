const hostname = 'http://localhost:8081/api';
const endpoints = {
  users: '/users',
  templates: '/templates',
};
export const usersEndpoint = `${hostname}${endpoints.users}`;
export const templatesEndpoint = `${hostname}${endpoints.templates}`;

export default usersEndpoint;
