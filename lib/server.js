'use strict';

const express = require('express');
require('dotenv').config();
const timeStamp = require('../middleware/timestamp');
const logger = require('../middleware/logger');
const fourOhFour = require('../middleware/404');
const fiveHundred = require('../middleware/500');
const categoriesRouter = require('../routes/categories');
const productRouter = require('../routes/product');
const app = express();

app.use(express.json());
app.use(timeStamp);
app.use(logger);
app.use('/api/v1/', categoriesRouter);
app.use('/api/v1/', productRouter);
app.use(fourOhFour);
app.use(fiveHundred);

const server = {
  server: app,
  start: () => {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

module.exports = server;