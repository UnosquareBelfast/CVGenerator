import { templatesEndpoint } from './config';

export const fetchTemplates = () => fetch(templatesEndpoint).then(resp => resp.json());

export default fetchTemplates;
