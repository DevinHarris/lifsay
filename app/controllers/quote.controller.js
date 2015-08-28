var Quote = require('../models/quotes');

module.exports.create = function() {
	var quote = new Quote(req.body);

	quote.save(function(err, quotes) {
		if (err) console.log(err);
		res.json(quotes);
	});
};