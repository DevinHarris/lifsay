var express = require('express'),
	Router = express.Router(),
	app = express(),
	mongoose = require('mongoose'),
	Quote = require('../models/quotes');
	//quoteController = require('../controllers/quote.controller');


// Seting up 

Router.route('/')
	.get(function(req, res) {
		Quote.find(function(err, quote) {
			if (err) {
				console.log(err);
			} else {
				res.json(quote);
			}
		});
	})
	.post(function(req, res) {
		var quote = new Quote(req.body);

		quote.save(function(err, quote) {
			if (err) {
				console.log(err);
			} else {
				res.json(quote);
			}
		});
	});

// Get a single quote

Router.route('/:quote_id')
	.get(function(req, res) {
		Quote.findOne({
			_id: req.params.quote_id
		}, function(err, quote) {
			if (err) {
				console.log(err);
			} else {
				res.json(quote);
			}
		});
	})
	.put(function(req ,res) {
		var quote = new Quote();

		quote.quote = req.body.quote;
		quote.author = req.body.author;

		quote.save(function(err) {
			if (err) {
				console.log(err);
			} else {
				res.send('Quote updated!');
			}

		});


	});



module.exports = Router;