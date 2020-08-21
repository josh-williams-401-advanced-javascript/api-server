'use strict';

const express = require('express');
require('dotenv').config();
const app = express();

const timeStamp = require('../middleware/timestamp');
const logger = require('../middleware/logger');
const fourOhFour = require('../middleware/404');
const fiveHundred = require('../middleware/500');
const router = require('./routes/api-v1');


app.use(express.json());
app.use(timeStamp);
app.use(logger);
app.use('/api/v1/', router);
app.use('*', fourOhFour);
app.use(fiveHundred);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};