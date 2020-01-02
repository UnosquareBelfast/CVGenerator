const hostname = 'http://localhost:8081/api';
const endpoints = {
  users: '/users',
  templates: '/templates',
  generatepdf: '/generatepdf?userId=1&templateId=2', // hardcoded (api is POC)
};
export const apiJsonHeader = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
export const usersEndpoint = `${hostname}${endpoints.users}`;
export const templatesEndpoint = `${hostname}${endpoints.templates}`;
export const generatepdfEndpoint = `${hostname}${endpoints.generatepdf}`;

export default usersEndpoint;
