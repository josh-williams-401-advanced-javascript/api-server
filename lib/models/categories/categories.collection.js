'use strict';

const schema = require('./categories.schema');
const Model = require('../mongo');

class Category extends Model {}

module.exports = new Category(schema);
