var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var quoteSchema = new Schema({
	quote: {type: String, required: true},
	author: {type: String, required: true}
});

module.exports = mongoose.model('Quote', quoteSchema);