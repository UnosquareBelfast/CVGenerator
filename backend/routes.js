const fetchPDF = require('Services/fetchPDF');
const endpoint = require('./constants');

module.exports = app => app.get(endpoint.getPDF, (req, res) => fetchPDF(res));
