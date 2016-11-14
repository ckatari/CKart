'use strict';

var mongoose = require('mongoose');

var productModel = function(){
  var productSchema = mongoose.Schema({
    title: String,
    description: String,
    price: String,
    category: String,
    ram: String,
    type: String,
    weight: String,
    cover: String
  });

//Shorten text
  productSchema.methods.truncText = function(length){
    return this.description.substring(0, length);
  }

  return mongoose.model('Product', productSchema);
};

module.exports = new productModel();
