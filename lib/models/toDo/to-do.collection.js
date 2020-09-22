'use strict';

const schema = require('./to-do.schema');
const Model = require('../mongo');

class Product extends Model {}

module.exports = new Product(schema);