'use strict';

const express = require('express');
const { endianness } = require('os');
const { request } = require('http');
const router = express.Router();

const db = {
  products: [],
  categories: [],
};

router.post('/products', (req,res) => {
  db.products.push(req.body);
  res.status(201).json(req.body);
});
router.get('/products', (req,res) => {
  res.status(200).json(db.products);
});
router.get('/products/:id', (req,res) => {
  let product = db.products.filter(entry => entry.id === req.params.id);
  res.status(200).json(product);
});
router.put('/products/:id', (req,res) => {
  let updatedProduct;
  db.products.forEach(product => {
    if(product.id === req.params.id) {

      product.id = req.body.id;
      product.category = req.body.category;
      product.name = req.body.name;
      product.display_name = req.body.display_name;
      product.description = req.body.description;

      updatedProduct = product;
      res.status(201).json(req.body);
    }
  });
  if(!updatedProduct){
    res.send('No ID match');
  }
});
router.delete('/products/:id', (req,res) =>{
  let orginalLength = db.products.length;
  db.products = db.products.filter(product => product.id !== req.params.id);
  if (db.products.length < orginalLength) {
    res.status(200).send(`Deleted Product ${req.params.id}`);
  } else {
    res.status(200).send('No ID match');
  }
});

module.exports = router;