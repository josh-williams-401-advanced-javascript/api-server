'use strict';

const server = require('./lib/server');
const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = `mongodb://localhost:${process.env.MONGO_PORT}/products`;

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(MONGODB_URI, mongooseOptions);

server.start();

