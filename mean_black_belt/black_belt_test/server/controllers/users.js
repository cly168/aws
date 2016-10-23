var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	login: function(request, response){
		User.findOne({first_name: request.body.first_name}, function(err, user){
			if(err){
				response.json(err);
			}
			else if(user==null){
				User.create(request.body, function(err, user){
					if(err){
						response.json(err);
					}
					else{
						response.json(user);
					}
				})		
			}
			else{
				response.json(user);
			}
		})		
	},
	index: function(request, response){
		User.find({}, function(err, user){
			if(err){
				response.json(err);
			}
			else{
				response.json(user);
			}
		})
	},
	one: function(request, response){
		User.findOne({_id: request.params.id}, function(err, user){
			if(err){
				response.json(err);
			}
			else{
				response.json(user);
			}
		})
	} 
}