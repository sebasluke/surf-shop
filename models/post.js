/* Post: 
- Title: string
- Price: string
- Description: String
- Images: array of strings
- Lat: int
- Lng: int
- Author: Object(id)
- reviews: array[objects: Review]  */
const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const postSchema = new Schema({
	title: String,
	price: String,
	description: String,
	images: [ String ],
	location: String,
	lat: Number,
	lng: Number,
	Author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	reviews: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Review'
		}
	]
});

modules.export = mongoose.model('Post', postSchema);
