'use strict';

var Product = require('../models/productModel');

module.exports = function (router) {
    router.get('/', function (req, res) {
      Product.find({}, function(err, products){
        if(err){
          console.log(err);
        }

        products.forEach(function(product){
          product.truncText = product.truncText(50);
        });

        var model = {
          products: products
        }
        res.render('index', model);
      });
    });

};
