const mongoose = require('mongoose'),
	Schema = mongoose.Schema;
x;

const reviewSchema = new Schema({
	body: String,
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

modules.export = mongoose.model('Review', reviewSchema);
