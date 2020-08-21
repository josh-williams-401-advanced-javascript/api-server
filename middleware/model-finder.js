'use strict';

const category = require('../lib/models/categories/categories.collection');
const product = require('../lib/models/products/products.collection');

const modelFinder = (req, res, next) => {
  switch (req.params.model) {
  case 'categories':
    req.model = category;
    next();
    return;
  case 'products':
    req.model = product;
    next();
    return;
  default:
    next('Invalid Request');
    return;
  }
};

module.exports = modelFinder;
