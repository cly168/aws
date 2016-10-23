var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var ListSchema = new mongoose.Schema({
	title: {
		type: String, 
		required: [true, 'Title is required'],
		minlength: [5, 'Title must be at least 5 characters'],
		trim: true
	},
	desc: {
		type: String,
		required: [true, 'Description is required'],
		minlength: [10, 'Description must be at least 10 characters'],
		trim: true
	},
	checked: {
		type: Boolean
	},
	_user1: {
		type: ObjectId, 
		ref: 'User'
	},
	_user2: {
		type: ObjectId, 
		ref: 'User'
	}
}, {timestamps: true});

mongoose.model('List', ListSchema);