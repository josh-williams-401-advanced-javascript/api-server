'use strict';

module.exports = (req, res, next) => {
  switch (req.params.model) {
  case 'categories':
    req.model = require('../lib/models/categories/categories.collection');
    next();
    return;
  case 'products':
    req.model = require('../lib/models/products/products.collection');
    next();
    return;
  default:
    next('Invalid Request');
    return;
  }
};
