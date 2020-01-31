const pdf = require('html-pdf');
const fetch = require('node-fetch');
const helper = require('./config');

module.exports = res => {
  fetch(helper.endpoint)
    .then(res => res.text())
    .then(body =>
      pdf.create(body, { format: 'letter' }).toStream((err, pdfStream) => {
        res.setHeader('Content-disposition', 'inline; filename=RobertBushmillsCV.pdf');
        res.setHeader('Content-type', 'application/pdf');

        if (err) {
          return res.send(err);
        }
        pdfStream.on('end', () => {
          return res.end();
        });
        pdfStream.pipe(res);
      }),
    );
};
