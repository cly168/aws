var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;


var UserSchema = new mongoose.Schema({
	first_name: {
		type: String, 
		required: [true, 'First name is required'], 
		trim: true,
	},
	
}, {timestamps: true});


mongoose.model('User', UserSchema);