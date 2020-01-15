const fetchPDF = require('../services/fetchPDF');

module.exports = app => {
  app.get('/api/getPDF', (req, res) => fetchPDF(res));
};
