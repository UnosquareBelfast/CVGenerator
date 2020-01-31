const hostname8081 = 'http://localhost:8081/api';
const hostname8085 = 'http://localhost:8085/api';

const endpoints = {
  users: '/users',
  templates: '/templates',
  generatepdf: '/getPDF', // hardcoded (api is POC)
};

export const apiJsonHeader = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const usersEndpoint = `${hostname8081}${endpoints.users}`;
export const templatesEndpoint = `${hostname8081}${endpoints.templates}`;
export const generatepdfEndpoint = `${hostname8085}${endpoints.generatepdf}`;

export default usersEndpoint;
