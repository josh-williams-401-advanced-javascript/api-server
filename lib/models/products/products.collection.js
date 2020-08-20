'use strict';

const Product = require('./products.schema');

class Model {
  async read(id){
    return id ? await Product.findById(id) : await Product.find({});
  }
  async create(saveObj){
    const newProduct = new Product(saveObj);
    return await newProduct.save();
  }
  async update(id, record){
    return await Product.findByIdAndUpdate(id, record, {new:true});
  }
  async delete(id){
    return await Product.findByIdAndDelete(id);
  }
}

module.exports = Model;
