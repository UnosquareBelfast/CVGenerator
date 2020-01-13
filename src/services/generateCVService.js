import { generatepdfEndpoint, apiJsonHeader } from './config';

export const fetchCV = () =>
  fetch(generatepdfEndpoint, {
    headers: apiJsonHeader,
  }).then(response => response.url);

export default fetchCV;
