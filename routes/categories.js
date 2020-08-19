'use strict';

const express = require('express');
const router = express.Router();

// change this to a persisting database
const db = {
  products: [],
  categories: [],
};

router.post('/categories', (req,res) => {
  db.categories.push(req.body);
  res.status(201).json(req.body);
});
router.get('/categories', (req,res) => {
  res.status(200).json(db.categories);
});
router.get('/categories/:id', (req,res) => {
  let category = db.categories.filter(entry => entry.id === req.params.id);
  res.status(200).json(category[0]);
});
router.put('/categories/:id', (req,res) => {
  let updatedCategory;
  db.categories.forEach(category => {
    if(category.id === req.params.id) {

      category.id = req.body.id;
      category.name = req.body.name;
      category.display_name = req.body.display_name;
      category.description = req.body.description;

      updatedCategory = category;
      res.status(201).json(req.body);
    }
  });
  if(!updatedCategory){
    res.send('No ID match');
  }
});
router.delete('/categories/:id', (req,res) =>{
  let orginalLength = db.categories.length;
  db.categories = db.categories.filter(category => category.id !== req.params.id);
  if (db.categories.length < orginalLength) {
    res.status(200).send(`Deleted Product ${req.params.id}`);
  } else {
    res.status(200).send('No ID match');
  }
});

module.exports = router;