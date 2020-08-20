'use strict';

const Category = require('./categories.schema');

class Model {
  async read(id){
    return id ? await Category.findById(id) : await Category.find({});
  }
  async create(saveObj){
    const newCategory = new Category(saveObj);
    return await newCategory.save();
  }
  async update(id, record){
    return await Category.findByIdAndUpdate(id, record, {new:true});
  }
  async delete(id){
    return await Category.findByIdAndDelete(id);
  }
}

module.exports = Model;