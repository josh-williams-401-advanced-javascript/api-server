'use strict';

const schema = require('./products.schema');
const Model = require('../mongo');
class Product extends Model {}

module.exports = new Product(schema);
