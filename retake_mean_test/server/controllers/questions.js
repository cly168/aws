var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {
	add: function(request, response){
		Question.create(request.body, function(err, question){
			if(err){
				response.json(err);
			}
			else{
				response.json(question);
			}
		})
	},
	get: function(request, response){
		Question.find({}, function(err, questions){
			if(err){
				response.json(err);
			}
			else{
				var qlist=[];
				for(var i=0; i<3; i++){
					var index = Math.floor(Math.random()*questions.length);
					qlist.push(questions[index]);
					questions.splice(index, 1);
				}
				response.json(qlist);
			}
		})
	}
}