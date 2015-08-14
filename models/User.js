var mongoose = require('mongoose');

var BuyCarSchema = new mongoose.Schema({
	email: String,
	password: String,
	updated_at: { type: Date, default: Date.now},
});

module.exports = mongoose.model('User', BuyCarSchema);