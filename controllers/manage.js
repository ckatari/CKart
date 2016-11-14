'use strict';

var Product = require('../models/productModel');
var Category = require('../models/categoryModel');

module.exports = function(router){
	router.get('/', function(req, res){
		res.render('manage/index');
	});

	router.get('/products', function(req, res){
		Product.find({}, function(err, products){
			if(err){
				console.log(err);
			}
			var model = {
				products: products
			}
			res.render('manage/products/index', model);
		});
	});

	router.get('/categories', function(req, res){
		res.render('manage/categories/index');
	});
}
