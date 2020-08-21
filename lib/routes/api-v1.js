'use strict';

const express = require('express');
const router = express.Router();
const modelFinder = require('../../middleware/model-finder');
const addToDb = require('./add-to-db');
const seeDb = require('./see-db');
const seeOne = require('./see-one');
const updateOne = require('./update-one');
const deleteOne = require('./delete-one');

router.param('model', modelFinder)

  .route('/:model')
  .post(addToDb)
  .get(seeDb);

router.route('/:model/:id')
  .get(seeOne)
  .put(updateOne)
  .delete(deleteOne);

module.exports = router;