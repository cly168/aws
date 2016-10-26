var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;


var QuestionSchema = new mongoose.Schema({
	question: {
		type: String, 
		required: [true, 'Question is required'],
		minlength: [15, 'Qeustion must have more than 15 characters']
	},
	correct: {
		type: String,
		required: [true, 'Correct Answer is required']
	}, 
	fake1: {
		type: String,
		required: [true, 'Fake answer is required']
	},
	fake2: {
		type: String,
		required: [true, 'Fake answer is required']
	},
	_user: {
		type: ObjectId,
		ref: 'User'
	}
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);
