import { generatepdfEndpoint } from './config';

export const fetchCV = () =>
  fetch(generatepdfEndpoint, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then(response => response.url);

export default fetchCV;
