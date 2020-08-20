'use strict';

const express = require('express');
const router = express.Router();
const Model = require('../lib/models/products/products.collection');
const productAction = new Model();

router.route('/products')
  .post(async (req, res) => {
    let body = await productAction.create(req.body);
    res.status(201).json(body);
  })
  .get(async (req, res) => {
    let body = await productAction.read();
    res.status(200).json(body);
  });

router.route('/products/:id')
  .get(async (req, res) => {
    let products = await productAction.read(req.params.id);
    res.status(200).json(products);
  })
  .put(async (req, res) => {
    let updated = await productAction.update(req.params.id, req.body);
    res.status(201).json(updated);
  })
  .delete(async (req, res) => {
    await productAction.delete(req.params.id);
    res.status(200).send(`Deleted ${req.params.id}`);
  });

module.exports = router;
