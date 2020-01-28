require('module-alias/register');
const express = require('express');

const app = express();

app.use(express.static('dist'));
require('./routes')(app);

const PORT = 8085;
app.listen(PORT);
