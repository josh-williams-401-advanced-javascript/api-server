'use strict';

const express = require('express');
const router = express.Router();
const Model = require('../lib/models/categories/categories.collection');
const categoryAction = new Model();

router.route('/categories')
  .post(async (req, res) => {
    let body = await categoryAction.create(req.body);
    res.status(201).json(body);
  })
  .get(async (req, res) => {
    let body = await categoryAction.read();
    res.status(200).json(body);
  });

router.route('/categories/:id')
  .get(async (req, res) => {
    let categories = await categoryAction.read(req.params.id);
    res.status(200).json(categories);
  })
  .put(async (req, res) => {
    let updated = await categoryAction.update(req.params.id, req.body);
    res.status(201).json(updated);
  })
  .delete(async (req, res) => {
    await categoryAction.delete(req.params.id);
    res.status(200).send(`Deleted ${req.params.id}`);
  });

module.exports = router;