'use strict';

class Model {
  constructor (schema) {
    this.schema = schema;
  }
  read(id){
    return id ? this.schema.findById(id) :  this.schema.find({});
  }
  create(saveObj){
    const newAddition = new this.schema(saveObj);
    return newAddition.save();
  }
  update(id, record){
    return this.schema.findByIdAndUpdate(id, record, {new:true});
  }
  delete(id){
    return this.schema.findByIdAndDelete(id);
  }
}

module.exports = Model;
