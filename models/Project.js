var mongoose = require('mongoose');

var BuyCarSchema = new mongoose.Schema({
	title: String,
	url: String,
	updated_at: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Project', BuyCarSchema);